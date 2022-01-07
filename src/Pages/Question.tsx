import { Checkbox, Container, FormControlLabel, FormGroup, Radio, RadioGroup, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { fillInTheBlanck, followingMatch, multipleChoice, multiSelect, QuestionInfo, trueFalse } from '../FakeData';


interface IProps {
    question: QuestionInfo,
    handleAns(option: string, checked?: boolean): void,
    isAns(arg: string): boolean
}

const Question: React.FC<IProps> = ({ question, isAns, handleAns }) => {
    return (
        <Container data-testid="ques">
            <Typography variant="h5">{question.title} <small>({question.type})</small> </Typography>
            {/* multiple choice */}
            {
                [multipleChoice, trueFalse, fillInTheBlanck].includes(question.type) &&

                <RadioGroup
                    name="radio-buttons-group"
                    onChange={(e) => handleAns(e.target.value)}
                >
                    {
                        question.options.map(op => (
                            <FormControlLabel
                                key={op}
                                value={op}
                               
                                control={<Radio
                                    checked={isAns(op)}
                                />}
                                label={op}
                            />
                        ))
                    }
                </RadioGroup>
            }


            {/* multi select */}
            {
                question.type === multiSelect && <FormGroup>

                    {
                        question.options.map((op =>
                            <FormControlLabel
                                key={op}
                                control={<Checkbox
                                    checked={isAns(op)}
                                    onChange={(e) => handleAns(op, e.target.checked)}
                                />}
                                label={op}
                            />
                        ))
                    }
                </FormGroup>
            }

            {/* match following */}
            {
                question.type === followingMatch && <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell />
                            {
                                question.matchAns?.map(ans => <TableCell>{ans}</TableCell>)
                            }

                        </TableRow>
                        {
                            question.options.map(op => <TableRow>
                                <TableCell>{op}</TableCell>
                                {
                                    question.matchAns?.map(ans =>
                                        <TableCell>

                                            <input
                                                type="radio"
                                                name={op}
                                                value={ans}
                                                // checked={isAns(op)}
                                                onChange={e => handleAns(op + "->" + e.target.value)}

                                            ></input>
                                        </TableCell>)
                                }
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            }
        </Container>
    );
};

export default Question;