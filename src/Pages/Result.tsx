import React from 'react';
import { useLocation } from 'react-router-dom';

interface ResultProps {
    ansCount: number,
    count: number
}

const Result = () => {
    const location = useLocation();

    const result = location.state as ResultProps;

    const deg = (a: number, b: number) => {
        return (360 * a) / (a + b);
    }
    return (
        <div data-testid="result">
             <h2>Result page</h2>
            <h3 style={{color: "green", padding: "5px", margin: "0"}}>Correct is {result.ansCount}</h3>
            <h3 style={{color: "red", padding: "10px", margin: "0"}}>Wrong is {result.count - result.ansCount}</h3>
            <div
                style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: `conic-gradient(
                            green 0deg ${deg(result.ansCount, result.count - result.ansCount)}deg, 
                            red ${deg(result.ansCount, result.count - result.ansCount)}deg 360deg)
                            `,
                    borderRadius: "50%",
                    margin: "auto"
                }}
            />
        </div>
    );
};

export default Result;