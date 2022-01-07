import React from 'react';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import {createMemoryHistory } from 'history'
import Result from '../Pages/Result';


test('Result', () => {
    const history=createMemoryHistory()
    history.push("/result",{ansCount: 5, count: 6})
  render(
  <Router history={history}>
      <Result/>
  </Router>
  );
  const res = screen.getByTestId("result");
  expect(res).toBeInTheDocument();
});
