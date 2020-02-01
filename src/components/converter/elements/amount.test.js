import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import { Amount } from './Amount.element';

describe('Amount element', () => {
  const mockProps = {
    amount: 12,
    setAmountCallback: jest.fn(),
    resetForm: jest.fn(),
    buttonText: 'Test Button Text'
  };
  const wrapper = shallow(<Amount {...mockProps} />);

  it('renders correctly with the required props passed to it', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('onClick calls handleConversion function', () => {
    const btnComponent = wrapper.find(Button);
    btnComponent.simulate('click', { event: { target: { value: 2 } } });
    expect(mockProps.resetForm).toHaveBeenCalledTimes(1);
  });
});
