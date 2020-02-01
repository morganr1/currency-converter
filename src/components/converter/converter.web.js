import React, { Component } from 'react';
import { fetchLatestCurrencies } from '../../api/currency.api';
import { Result, Currencies, Amount } from '../index';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import fx from 'money';
import './converter.scss';

fx.base = 'EUR';

class Converter extends Component {
  state = {
    currencies: [],
    result: null,
    fromCurrency: 'EUR',
    toCurrency: 'GBP',
    amount: 1
  };

  componentDidMount = async () => {
    // A default while the api request returns values
    const currencyArray = ['EUR'];
    let rates = await fetchLatestCurrencies();
    fx.rates = rates;
    for (const key in rates) {
      currencyArray.push(key);
    }
    currencyArray.sort();
    this.setState({ currencies: currencyArray });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currencies, toCurrency, fromCurrency, amount } = this.state;
    // Once currencies are loaded - do an initial conversion to be shown on first render
    if (prevState.currencies !== currencies) {
      this.handleConversion();
    }
    // when the user changes the 'To' currency, automatically convert
    if (
      prevState.toCurrency !== toCurrency ||
      prevState.fromCurrency !== fromCurrency
    ) {
      this.handleConversion();
    }

    if (prevState.amount !== this.state.amount && amount) {
      this.handleConversion();
    }
  }

  handleConversion = () =>
    this.setState({
      result: fx(this.state.amount)
        .from(this.state.fromCurrency)
        .to(this.state.toCurrency)
    });

  handleCurrencySelect = ({ target: { value, name } }) => {
    if (name === 'From') {
      this.setState({ fromCurrency: value });
    }
    if (name === 'To') {
      this.setState({ toCurrency: value });
    }
  };

  swapCurrencies = () =>
    this.setState(prevState => ({
      toCurrency: prevState.fromCurrency,
      fromCurrency: prevState.toCurrency
    }));

  resetForm = amount => {
    this.setState({ amount, result: 1 });
    this.handleConversion();
  };

  setAmount = amount => this.setState({ amount });

  render() {
    const { fromCurrency, toCurrency, currencies, result, amount } = this.state;
    const { themeType } = this.props;
    const disabled = !amount;
    return (
      <Paper
        elevation={21}
        className="converter-container"
        style={{ paddingTop: 20, paddingBottom: 30 }}
      >
        <Typography className="title-text" variant="h5" component="h5">
          CURRENCY CONVERTER
        </Typography>
        <Result {...{ result, toCurrency, themeType }} />
        <Currencies
          {...{
            disabled,
            currencies,
            fromCurrency,
            toCurrency,
            swapCurrencies: this.swapCurrencies,
            handleCurrencySelect: this.handleCurrencySelect
          }}
        />
        <Amount
          {...{
            disabled,
            amount,
            setAmountCallback: this.setAmount,
            resetForm: this.resetForm,
            buttonText: 'Clear'
          }}
        />
      </Paper>
    );
  }
}

export default Converter;
