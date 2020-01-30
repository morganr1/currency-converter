import React from 'react';
import Converter from './converter.web';
import { shallow } from 'enzyme';


describe('Converter Component', () => {
    const mockProps = {
        themeType: 'light'
    };
    const mockSuccessResponse = {
        rates: {
            'EUR': 1,
            'GBP': 1.12,
            'USD': .89
        }
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
    const wrapper = shallow(<Converter{...mockProps} />);

    it('renders correctly after fetching currencies from the api successfully', () => {
        expect(wrapper).toMatchSnapshot();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest');
    });
});
