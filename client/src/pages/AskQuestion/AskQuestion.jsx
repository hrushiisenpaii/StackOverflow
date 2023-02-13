import React from 'react'
import './AskQuestion.css'
import Navbar from '../../components/Navbar/Navbar'

const AskQuestion = () => {
  return (
    <>
    <Navbar/>
    
    <div className='ask-question'>
         <div className='ask-ques-container'>
            <h1>
                Ask a public Question
            </h1>
            <form>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title of Question</h4>
                        <p>Be specific, and briefly state the Question.</p>
                        <input type="text" id='ask-ques-title' placeholder='e.g. why I suck at coding?..'/>
                    </label>

                    <label htmlFor="ask-ques-body">
                        <h4>Body of Question</h4>
                        <p>Tell a little, remember that details yields better answers.</p>
                        <textarea id="ask-ques-body" cols="30" rows="10"></textarea>
                        
                    </label>

                    <label htmlFor="ask-ques-tags">
                        <h4>Tags for your Question</h4>
                        <p>Good tags reaches user Better.</p>
                        <input type="text" id='ask-ques-tags' placeholder='e.g. (cpp java react)'/>
                    </label>
                </div>
                <input type="submit" value='Review your Question' className='review-btn' />
            </form>
        </div>
    </div>

    </>      
  )
   
}

export default AskQuestion