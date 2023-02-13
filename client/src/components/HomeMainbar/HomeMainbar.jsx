import React from 'react'
import './HomeMainbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

var questionList = [
  {
    id: 1,
    votes: 5, 
    noOfAnswers: 5,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "Nodejs", "Python", "C", ],
    userPosted: "Hrushii",
    askedOn: "Jan 1"
  }
]

  const user = 1
  const location = useLocation()
  const Navigate = useNavigate()
  const checkAuth = () => {
      if(user === null){
        alert("Log-in or Sign-up to ask questions!")
        Navigate('/Auth')
      }
      else{
        Navigate('/AskQuestion')
      }
  }

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button onClick={checkAuth} className='ask-btn'>
              Ask Question
          </button>
        </div>
        
        <div>
          {
            questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p className='qus-no'> {questionList.length} Questions </p>
              <QuestionList questionList={questionList} />
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar