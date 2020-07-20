import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders TodoTitle link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/To-do/i);
  expect(linkElement).toBeInTheDocument();
});