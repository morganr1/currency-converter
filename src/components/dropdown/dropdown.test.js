import React from 'react';
import Select from '@material-ui/core/Select';
import { DropDownComponent } from './dropdown.web';
import { shallow } from 'enzyme';

describe('Dropdown Component', () => {
    const mockProps = {
        values: ['EUR', 'GBP'],
        currentValue: 'EUR',
        label: 'Test Dropdown Label',
        onChangeCallback: jest.fn(),
    };
    const wrapper = shallow(<DropDownComponent{...mockProps} />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('change event calls the onChangeCallback', () => {
        const selectComp = wrapper.find(Select);
        expect(selectComp).toBeDefined();
        selectComp.simulate('change', { target: { value: 'GBP' }});
        expect(mockProps.onChangeCallback).toHaveBeenCalledWith({ target: { value: 'GBP' }});
    });
});