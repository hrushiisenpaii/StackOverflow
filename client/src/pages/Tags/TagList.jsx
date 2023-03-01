import React from 'react'

const TagList = ({tag}) => {
  return (
    <div className='tag'>
        <h4>{tag.tagName}</h4>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagList