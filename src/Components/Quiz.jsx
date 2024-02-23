import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import data from '../resources/quizQuestion.json';

function QuizContainer() {
    const [state, setState] = useState(0);
    const [attempt, setAttempt] = useState(0);
    const [wrongAns, setWrongAns] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);

    const handelNext = () => {
        setState((prevState) => (prevState + 1) % data.length);
    }

    const handelPrevious = () => {
        setState((prevState) => (prevState - 1 + data.length) % data.length);
    }

    const HandelQuit = () => {
        if (window.confirm('Are you sure you want to quit?')) {
            setAttempt(0);
            setCorrectAns(0);
            setWrongAns(0);
            window.location.href = '/Quiz';
        }
    }

    const handelAnswer = (option) => {
        setAttempt(prevAttempt => prevAttempt + 1);
        if(option === data[state].answer){
            setCorrectAns(prevCorrectAns => prevCorrectAns + 1);
            alert("Correct Answer");
        } else {
            setWrongAns(prevWrongAns => prevWrongAns + 1);
            alert("Wrong Answer");
        }
        handelNext();
    }

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify({attempt, correct: correctAns, wrong: wrongAns}));
    }, [attempt, correctAns, wrongAns]);

    return (
        <div className="quiz-container">
            <h1 className="question">Question</h1>
            <div className='question-no'>
                <h5>{state + 1} of 15</h5>
            </div>
            <h3 className='main-q'>{data[state].question}</h3>
            <div className='option-cointainer' onClick={(e) => handelAnswer(e.target.innerText)}>
                <button className="option">{data[state].optionA}</button>
                <button className="option">{data[state].optionB}</button>
                <button className="option">{data[state].optionC}</button>
                <button className="option">{data[state].optionD}</button>
            </div>
            <div className="controls">
                <button className="prev" onClick={handelPrevious}>Previous</button>
                <button className="next" onClick={handelNext}>Next</button>
                <button className="quit" onClick={HandelQuit}>Quit</button>
                <Link to="/result"><button className='finsh'>Finish</button></Link>  
            </div>
        </div>
    );
}

export default QuizContainer;
