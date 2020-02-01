import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TextFieldComponent } from './textField.web';
import { shallow } from 'enzyme';

describe('TextField Component', () => {
  const mockProps = {
    value: 1,
    onChangeCallback: jest.fn(),
    label: 'test label'
  };
  const wrapper = shallow(<TextFieldComponent {...mockProps} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('change event calls the onChangeCallback', () => {
    const textField = wrapper.find(TextField);
    expect(textField).toBeDefined();
    textField.simulate('change', { target: { value: 2 } });
    expect(mockProps.onChangeCallback).toHaveBeenCalledWith({
      target: { value: 2 }
    });
  });
});
