import React from'react';
import "./result.css"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ResultCom = () => {
    const [attempt, setAttempt] = React.useState(0);
    const [correctAns, setCorrectAns] = React.useState(0);
    const [wrongAns, setWrongAns] = React.useState(0);

    useEffect (() => {
        const storedData = JSON.parse(localStorage.getItem('score'));
        if(storedData){
            setAttempt(storedData.attempt);
            setCorrectAns(storedData.correct);
            setWrongAns(storedData.wrong);
        }
    } , []);


        const totalScore = () =>{
            return parseInt((correctAns / 15 ) * 100);

        }

    return (
       <div className='main'>
         <h1>Result</h1>
        <div className="result-container">
            <h2>your score {totalScore()}</h2>
            <h3>{totalScore() > 50 ? "Congrats you passed !!":"You need more practice"}</h3>
            <div className='numberOFQ'>
                <h4>Total number of questions</h4>
                <h4>15</h4>
            </div>
            <div className='attemptedQ'>
                <h4>Number of questions attempted</h4>
                <h4>{attempt}</h4>
            </div>
            <div className='correctQ'>
                <h4>Total correct answers</h4>
                <h4>{correctAns}</h4>
            </div>
            <div className='wrongQ'>
                <h4>Total wrong answers</h4>
                <h4>{wrongAns}</h4>
            </div>
        </div>
        <div className='btns'>
        <Link to="/quiz">
            <button className="result-button">Play Again</button>
            </Link>
            <Link to ="/">
            <button className='HomeBtn'>Back to home</button>
            </Link>
        </div>
    </div>   
    )
}
export default ResultCom;
