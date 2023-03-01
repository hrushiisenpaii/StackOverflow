import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { deleteAnswer } from '../../actions/question'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question, handelShare}) => {

    const User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - '1'));
    }

  return (
    <div>
        {
            question.answer.map((ans) => (
                <div className="display-answer" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button' onClick={handelShare}>Share</button>  
                            {
                                User?.result?._id === ans?.userId && (
                                    <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>  
                                )
                            } 
                        </div>

                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/User/${ans.userId}`} className='user-link ans'>
                                <Avatar>
                                {ans.userAnswered.charAt(0).toUpperCase()}
                                </Avatar> 
                                <div>
                                    {ans.userAnswered}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer