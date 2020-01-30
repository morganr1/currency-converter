import React from 'react';
import { shallow } from 'enzyme';
import { Currencies } from './Currencies.element';

describe('Currencies element', () => {
    it('renders correctly with the required props passed to it', () => {
        const mockProps = {
            currencies: ['EUR', 'GBP', 'USD'],
            fromCurrency: 'GBP',
            toCurrency: 'EUR',
            handleCurrencySelect: jest.fn()
        };
        const wrapper = shallow(<Currencies {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
