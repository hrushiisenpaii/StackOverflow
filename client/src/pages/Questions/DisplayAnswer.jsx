import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
  return (
    <div>
        {
            question.answer.map((ans) => (
                <div className="display-answer" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                        </div>

                        <div>
                            <p>answered on {ans.answeredOn}</p>
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