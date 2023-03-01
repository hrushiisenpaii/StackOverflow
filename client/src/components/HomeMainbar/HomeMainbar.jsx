import React from 'react'
import './HomeMainbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

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

  const questionList = useSelector(state => state.questionReducer)

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
        
        <div activeClass='active'>
          {
            questionList.data === null ?
            <h1 className='loading'>Loading...</h1> :
            <>
              <p className='qus-no'> {questionList.data.length} Questions </p>
              <QuestionList questionList={questionList.data} />
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar