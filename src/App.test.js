import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CURRENCY CONVERTER/i);
  expect(linkElement).toBeInTheDocument();
});
