import React from 'react';
import { render, screen } from '@testing-library/react';
import Exam from '../Pages/Exam';
import { Router } from 'react-router-dom';
import {createMemoryHistory } from 'history'


test('Exam', () => {
    const history=createMemoryHistory()
    history.push("exam",{name:"", gender:"Male", lang:"React"})
  render(
  <Router history={history}>
      <Exam/>
  </Router>
  );
  const exam = screen.getByTestId("exam");
  expect(exam).toBeInTheDocument();
});
