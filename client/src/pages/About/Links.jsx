import React from 'react'

import github from '../../assests/github.svg'
import linkedin from '../../assests/linkedin.svg'
import code from '../../assests/code.svg'

const Links = () => {
  return (
    <div className='about-links'>
        <p className='about-links-1'> <img src={github} alt="Github" width={20} />
          <a href="https://github.com/hrushiisenpaii/hrushiisenpaii" target='_blank' rel="noopener noreferrer">
            Github</a></p>  
        <p className='about-links-1'> <img src={linkedin} alt="LinkedIn" width={20} />
          <a href="https://www.linkedin.com/in/hrushikeshpatra24/" target='_blank' rel="noopener noreferrer">
          LinkedIn</a></p>  
        <p className='about-links-1'> <img src={code} alt="SourceCode" width={20} />
          <a href="https://github.com/hrushiisenpaii/StackOverflow" target='_blank' rel="noopener noreferrer">
          Source Code</a></p> 
    </div>
  )
}

export default Links