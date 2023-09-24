import React from 'react'
import questions from './Quizzdata'

const Quizresult = (props) => {
  return (
    <div>
      <h2>Completed</h2>
      <h4 style={{paddingLeft:'10px', marginBottom:'10px',marginTop:'30px'}}>Total Score {props.score}/{questions.length}</h4>
      <button onClick={props.handleplayagain} style={{marginTop:'30px',marginLeft:'20px', width:'120px',height:'70px', textAlign:'center',padding:'20px'}}>Play Again</button>
    
    </div>
  )
}

export default Quizresult
