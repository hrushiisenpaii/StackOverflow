import React from 'react'
import { useParams, Link } from 'react-router-dom'
import upvote from '../../assests/upvote.svg'
import downvote from '../../assests/downvote.svg'
import'./Question.css'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {

    const { id } = useParams()

    const questionList = useSelector(state => state.questionReducer)
      
  return (
    <div className='question-details-page'>
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
                                    <img src={upvote} alt="" width='18' className='votes-icon up' activeClass='active' />
                                    <p>{question.upVotes - question.downVotes}</p>
                                    <img src={downvote} alt="" width='18' className='votes-icon down' activeClass='active' />
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
                                            <button type='button' >Share</button>
                                            <button type='button'>Delete</button>       
                                        </div>
                                        <div>
                                            <p>asked on {question.askedOn} </p>
                                            <Link to={`/Users/${question.userId}`} className='user-link ans-1'>
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
                            <h3>{question.noOfAnswers} answers</h3>
                            <DisplayAnswer key={question._id} question={question}/>
                        </section>
                    ) 
                }

                <section className='post-ans-container'>
                    <h3>Post an Answer</h3>
                    <form>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
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