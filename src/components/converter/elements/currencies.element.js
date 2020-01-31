import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from './../../index';

export const Currencies = ({ disabled, currencies, fromCurrency, toCurrency, handleCurrencySelect }) =>
    <div className="currencies-container">
        <Dropdown {...{ disabled, values: currencies, currentValue: fromCurrency, onChangeCallback: handleCurrencySelect, label: 'From' }}/>
        <Dropdown {...{ disabled, values: currencies, currentValue: toCurrency, onChangeCallback: handleCurrencySelect, label: 'To' }}/>
    </div>;

Currencies.propTypes = {
    disabled: PropTypes.bool,
    currencies: PropTypes.array.isRequired,
    fromCurrency: PropTypes.string.isRequired,
    toCurrency: PropTypes.string.isRequired,
    handleCurrencySelect: PropTypes.func.isRequired
};
