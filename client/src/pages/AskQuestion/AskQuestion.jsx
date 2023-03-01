import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'
import './AskQuestion.css'
import Navbar from '../../components/Navbar/Navbar'

const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const User = useSelector((state) => (state.currentUserReducer))

    const handelEnter = (e) => {
        if(e.key === 13){
            setQuestionBody(questionBody + '\n')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
    }

  return (
    <>
    <Navbar/>
    
    <div className='ask-question'>
         <div className='ask-ques-container'>
            <h1>
                Ask a public Question
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title of Question</h4>
                        <p>Be specific, and briefly state the Question.</p>
                        <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. why I suck at coding?..'/>
                    </label>

                    <label htmlFor="ask-ques-body">
                        <h4>Body of Question</h4>
                        <p>Tell a little, remember that details yields better answers.</p>
                        <textarea id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handelEnter} cols="30" rows="10"></textarea>
                    </label>

                    <label htmlFor="ask-ques-tags">
                        <h4>Tags for your Question</h4>
                        <p>Good tags reaches user Better.</p>
                        <input type="text" id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (cpp java react) upto 4 tags.'/>
                    </label>
                </div>
                <input type="submit" value='Post your Question' className='review-btn' />
            </form>
        </div>
    </div>
    

    </>      
  )
   
}

export default AskQuestion