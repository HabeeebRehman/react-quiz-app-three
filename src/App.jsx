import './App.css'
import {Route, Routes } from 'react-router-dom';
import StartCom from './Components/Start'
import QuizCom from './Components/Quiz'
import Result from './Components/result'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<StartCom />} />
        <Route path="/quiz" element={<QuizCom />} />
        <Route path="/result" element={<Result/>} />

      </Routes>
    </div>
    </>
  )
}

export default App
