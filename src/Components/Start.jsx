import React from'react';
import { Link } from'react-router-dom';
import './start.css';

const Start = () =>{
    return (
        <div className='all-content'>
            <h1>Welcome to the Quiz App</h1>
            <div className='sub-content'>
            <Link to="/quiz">
            <button>Start</button>
            </Link>
            </div>
            
        </div>
    )
}
export default Start;