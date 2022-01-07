import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from '../Pages/Question';
import { QuestionInfo } from '../FakeData';




test('question', () => {

  const question: QuestionInfo = {
    id: 1,
    title: "string",
    options: [""],
    matchAns: [""],
    ans: [""],
    lang: "string",
    type: ""
}
const isAns = () => {
  return false;
}

const handleAns = () => {
  console.log("handle ans")
}

  render(<Question
    question={question} handleAns={handleAns} isAns={isAns} />);
  const ques = screen.getByTestId("ques");
  expect(ques).toBeInTheDocument();
});
