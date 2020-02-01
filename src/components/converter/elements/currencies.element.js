import React from 'react';
import PropTypes from 'prop-types';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { Dropdown } from './../../index';
import IconButton from '@material-ui/core/IconButton';

export const Currencies = ({
  disabled,
  currencies,
  swapCurrencies,
  fromCurrency,
  toCurrency,
  handleCurrencySelect
}) => (
  <div className="currencies-container">
    <Dropdown
      {...{
        disabled,
        values: currencies,
        currentValue: fromCurrency,
        onChangeCallback: handleCurrencySelect,
        label: 'From'
      }}
    />
    <IconButton
      style={{ alignSelf: 'center' }}
      disabled={disabled}
      aria-label="swap currency button"
      size="large"
      onClick={() => swapCurrencies()}
      color="secondary"
    >
      <SwapHorizIcon />
    </IconButton>
    <Dropdown
      {...{
        disabled,
        values: currencies,
        currentValue: toCurrency,
        onChangeCallback: handleCurrencySelect,
        label: 'To'
      }}
    />
  </div>
);

Currencies.propTypes = {
  disabled: PropTypes.bool,
  currencies: PropTypes.array.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  handleCurrencySelect: PropTypes.func.isRequired
};
