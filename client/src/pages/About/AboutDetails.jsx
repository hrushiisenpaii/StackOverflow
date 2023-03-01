import React from 'react'

import Links from './Links'
import CourseDetail from './CourseDetail'

const AboutDetails = () => {
  return (
    <div className='aboutdetails-container'>
        <div className="about-page">
          <h2>StackOverflow</h2>
          <p>Stack Overflow is a popular online community where programmers and 
            developers can ask questions and get answers related to various programming languages, 
            frameworks, libraries, and tools. The platform was launched in 2008 and has since become one of t
            he go-to resources for developers around the world.</p>
          <p>Stack Overflow's primary feature is its question and answer system. Users can ask questions 
            related to specific programming problems and receive answers from other community members who have knowledge
             and experience in the relevant technology. The platform uses a voting system where users can upvote
              helpful answers and downvote unhelpful or incorrect ones, helping to ensure that the most useful 
              answers rise to the top.</p>  
          <p>In addition to its question and answer system, Stack Overflow also offers a range of other features,
             such as job postings, developer surveys, and a community blog. The platform has a strict code 
             of conduct and moderation system to ensure that discussions remain respectful and on-topic.</p>    
        </div>
        <div className="about-dev">
          <h2>Developer</h2>
          
          <p>Created by Hrushikesh Patra, using <a href="https://nullclass.com/project/learn-to-build-a-real-time-website-like-stack-overflow/#component=course"
              target='_blank' rel="noopener noreferrer">NullClass course</a> providing a quick programme to expand ones knowledge on website building.
          </p>

          <CourseDetail/>
          <Links/>
        </div>
    </div>
  )
}

export default AboutDetails