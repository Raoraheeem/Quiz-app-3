import React from 'react'
import './Quiz.css';
import questions from './Quizzdata';
import { useState } from 'react';
import Quizresult from './Quizresult';

const Quiz = () => {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const[showresult,setShowresult]=useState(false)
    const[clicked,setClicked]=useState(false)
    let selectedoption;

    const onNextOption=()=>{
        const nextQuestion=currentQuestion+1
        setClicked(false)
        if(nextQuestion<questions.length)
          {
            setCurrentQuestion(nextQuestion)
          }
        else{
            setShowresult(true)
        }
    
        
    }
    const handleanswer=(isCorrect,selectedoption)=>{
        if(isCorrect)
          {
            setScore(score+1)
            
          }
          
            setClicked(true)
            return selectedoption
        

    }
    const handleplayagain=()=>{
        setCurrentQuestion(0)
        setScore(0);
        setShowresult(false)
    }
  return (
    
    <div className='app'>
        
{showresult?<Quizresult score={score}  handleplayagain={handleplayagain} selectedoption={selectedoption} />:( <>
    <div className=' question-section float-xxl-end'>

     <h2>Score:{score}</h2>
     <div className='question-count'>
        <p style={{fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    fontSize: "25px"}}>Question {currentQuestion+1} / {questions.length}</p>
     </div>
     <div className='question-text'>
        <h5 style={{fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    fontSize: "40px"}}>{questions[currentQuestion].id}: {questions[currentQuestion].questionText}</h5>

     </div>
    </div>
    <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((ans,i)=>{
        return <button style={{fontFamily: "'Poppins', sans-serif",
        fontWeight: "bold",
        fontSize: "25px"}} className={`button ${clicked && ans.isCorrect?"correct":"button"}`} disabled={clicked} key={i} onClick={()=>handleanswer(ans.isCorrect,ans.answerText)}>{ans.answerText}</button>
        })}
        <div className='actions'>
        <button onClick={handleplayagain}>Quit</button>
        <button disabled={!clicked} onClick={onNextOption} >Next</button>

    </div>
    </div>
    </>)}
   
    
      
    </div>
  )
}

export default Quiz
