import React from 'react'
import './HomeMainbar.css'
import { Link, useLocation } from 'react-router-dom'
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
  },
  {
    id: 1,
    votes: 5, 
    noOfAnswers: 5,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "Nodejs", "Python", "C", ],
    userPosted: "Hrushii",
    askedOn: "Jan 1"
  },
  {
    id: 1,
    votes: 5, 
    noOfAnswers: 5,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "Nodejs", "Python", "C", ],
    userPosted: "Hrushii",
    askedOn: "Jan 1"
  },
  {
    id: 1,
    votes: 5, 
    noOfAnswers: 5,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "Nodejs", "Python", "C", ],
    userPosted: "Hrushii",
    askedOn: "Jan 1"
  },
  {
    id: 1,
    votes: 5, 
    noOfAnswers: 5,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "Nodejs", "Python", "C", ],
    userPosted: "Hrushii",
    askedOn: "Jan 1"
  },
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

  const location = useLocation()

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <Link to='/AskQuestion' className='ask-btn'>
              Ask Question
          </Link>
        </div>
        
        <div>
          {
            questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p> {questionList.length} Questions </p>
              <QuestionList questionList={questionList} />
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar