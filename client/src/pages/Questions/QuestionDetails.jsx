import React, {useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import'./Question.css'

import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import upvote from '../../assests/upvote.svg'
import downvote from '../../assests/downvote.svg'

const QuestionDetails = () => {

    const { id } = useParams()
    const User = useSelector((state) => (state.currentUserReducer))

    const questionList = useSelector(state => state.questionReducer)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const [Answer, setAnswer] = useState(' ')

    const handelPostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login to Answer!')
            Navigate('/Auth')
        }else{
            if(Answer === '' ){
                alert('Enter Answer before submitting.')
            }else{
                dispatch(postAnswer( {id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
            }
        }
    }

    const location = useLocation()
    const URL = 'http://localhost:3000'
    const handelShare = () => {
        copy(URL + location.pathname)
        alert("URL has been copied: " + URL + location.pathname)
    } 

    const handelDelete = () =>{
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpvote = () => {
        dispatch(voteQuestion(id, 'upvote', User.result._id))
    }
    const handleDownvote = () => {
        dispatch(voteQuestion(id, 'downvote', User.result._id))
    }
      
  return (
    <div className='question-details-page' >
        {
            questionList.data === null ?
            <h1>Loading...</h1> :
            <>
              {
                questionList.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <div className='title-ques'>
                                <h1>Q. </h1>
                                <h1>{question.questionTitle}</h1>
                            </div>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upvote} alt="" width='18' className='votes-icon up' activeClass='active'
                                    onClick={handleUpvote} />
                                    <p>{question.upvote.length - question.downvote.length}</p>
                                    <img src={downvote} alt="" width='18' className='votes-icon down' activeClass='active'
                                    onClick={handleDownvote} />
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handelShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handelDelete}>Delete</button>  
                                                )
                                            }      
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()} </p>
                                            <Link to={`/User/${question.userId}`} className='user-link ans-1'>
                                                <Avatar>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                {
                    question.noOfAnswers !== 0 && (
                        <section>
                            <h3>{question.noOfAnswers} Answers</h3>
                            <DisplayAnswer key={question._id} question={question} handelShare={handelShare}/>
                        </section>
                    ) 
                }

                <section className='post-ans-container'>
                    <h3>Post an Answer</h3>
                    <form onSubmit={ (e) => { handelPostAns(e, question.answer.length) }}>
                        <textarea name="" id="" cols="30" rows="10" onChange={ e => setAnswer(e.target.value)}></textarea>
                        <br />
                        <input type="submit" className='post-ans-btn' value='Post your Answer' />
                    </form>

                    <p>Browse other Question tagged 
                        {
                        question.questionTags.map((tag) => (
                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                        ))
                        } or {
                            <Link to='/AskQuestion'>Ask your own Question</Link>
                        }
                        </p>
                </section>

                    </div>
                ))
                }  
            </>
            }
    </div>
  )
}

export default QuestionDetails