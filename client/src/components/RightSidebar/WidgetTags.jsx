import React from 'react'

const WidgetTags = () => {

const tags = ['C', 'C++', 'JavaScript', 'HTML', 'CSS', 'Firebase', 'Python', 'Java', 'Json', 'Axios', 'Redux', 
'Mongoose', 'Express', 'Node', 'React', 'MySql', 'DSA', 'Web-Dev', 'OOPs', 'Flutter', 'Tailwind', 'Mongodb', 'Heroku',
'Netlify', 'php']

  return (
    <div  className='widget-tags'>
        <h3>Frequent tags</h3>
        <div className='widget-tags-div'>
            { 
              tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
        </div>
    </div>
  )
}

export default WidgetTags