import React from 'react';
import { Dropdown } from './../../index';

export const Currencies = ({ disabled, currencies, fromCurrency, toCurrency, handleCurrencySelect }) =>
    <div className="currencies-container">
        <Dropdown {...{ disabled, values: currencies, currentValue: fromCurrency, onChangeCallback: handleCurrencySelect, label: 'From' }}/>
        <Dropdown {...{ disabled, values: currencies, currentValue: toCurrency, onChangeCallback: handleCurrencySelect, label: 'To' }}/>
    </div>;
