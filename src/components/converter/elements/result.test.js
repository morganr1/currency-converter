import React from 'react';
import { shallow } from 'enzyme';
import { Result } from './result.element';

describe('Result element', () => {
  it('renders correctly with the required props passed to it', () => {
    const mockProps = {
      result: 10,
      toCurrency: 'EUR',
      themeType: 'dark'
    };
    const wrapper = shallow(<Result {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
