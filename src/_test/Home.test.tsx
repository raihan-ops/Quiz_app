import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

test('App', () => {
  render(<Home />);
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
