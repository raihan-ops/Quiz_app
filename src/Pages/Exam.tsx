
import { Chip, Container, Typography ,Button} from '@mui/material';
import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom'

import { fillInTheBlanck, followingMatch, getQuestionByLang, multipleChoice, multiSelect, trueFalse } from '../FakeData';
import { UserInfo } from './Home';
import Question from './Question';

interface AnsInfo {
    id:number,
    options:string[]
}

const Exam = () => {
    const {state} = useLocation();
    const userInfo= state as UserInfo;
    const history=useHistory();

    const [questionNo, setQuestionNo]=useState<number> (0);
    const [ansList,setAnsList]=useState<AnsInfo[]>([]);



    const filterQuestion= getQuestionByLang(userInfo.lang);
    const currentQ=filterQuestion[questionNo];

    const questionChange= (qNo:number)=>{
        setQuestionNo(qNo);
    }

    const handleAns = (option: string, checked?: boolean) => {

        // find if ans by question.
        const find = ansList.find(ans => ans.id === currentQ.id);

        if (find) { // find exists


            // 1st 
            if ([multipleChoice, trueFalse, fillInTheBlanck].includes(currentQ.type)) {

                const _ansList = ansList.map((ans) => {

                    if (ans.id === currentQ.id) {
                        ans = {id: currentQ.id, options: [option]};
                    }

                    return ans;
                });

                setAnsList(_ansList)

                return;
            }

            // 2nd 

            if (currentQ.type === multiSelect) {

                const _ansList = ansList.map((ans) => {

                    if (ans.id === currentQ.id) {

                        if (checked) {
                            ans = {id: currentQ.id, options: [...ans.options, option]};
                        } else {
                            let _options = ans.options.filter(op => op !== option);
                            ans = {id: currentQ.id, options: _options};
                        }
                    }

                    return ans;
                })

                setAnsList(_ansList)

                return;

            }

            // 3rd 

            if (currentQ.type === followingMatch) {

                const _ansList = ansList.map((ans) => {

                    if (ans.id === currentQ.id) {

                        const _left = option.split("->")[0];

                        let _options = ans.options.filter(op => !op.startsWith(_left));
                        ans = {id: currentQ.id, options: [..._options, option]};

                    }

                    return ans;
                })

                setAnsList(_ansList);

                return;
            }


        } else { // find not exists
            const _ans = {id: currentQ.id, options: [option]};
            setAnsList([...ansList, _ans])
        }


        
        

    }


    console.log(ansList);
    



    const isAns =(option :string)=>{
        const ans = ansList.find(ans => ans.id === currentQ.id);

        if (!ans) return false;

        return !!ans.options.find(op => op === option);
    }

    const isQuestionAns = (questionId: number) => {

        const ans = ansList.find(ans => ans.id === questionId);

        if (!ans) return false;

        return ans.options.length > 0;

    }

    const handleResult = () => {

        let count: number = 0;

        ansList.forEach(ans => {

            for (let q of filterQuestion) {
                if (ans.id === q.id) {
                    if (JSON.stringify(ans.options) === JSON.stringify(q.ans)) {
                        count++;
                    }
                    break;
                }
            }

        });

        history.push("/result", {ansCount: count, count: filterQuestion.length});

    }

  
    
   
    

    return (
        <Container data-testid="exam">
           <Typography variant="h4" > Exam :{userInfo.lang}</Typography>

           {
               filterQuestion.map((q,i)=>
                   <Chip 
                   color={isQuestionAns(q.id) ? "error" : "default"}
                   key={q.id}
                   label={i+1}
                   onClick={()=> questionChange(i)}

                    />


                  
            )
           }
           <Question question={currentQ} handleAns={handleAns} isAns={isAns}></Question>

           <Button
                onClick={handleResult}
                variant="contained"
                disabled={!(ansList.length===filterQuestion.length)}
            >
                Submit
            </Button>

        </Container>
    );
};

export default Exam;