import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import tools from '../../assests/tools.jpg'
import "./Teams.css"

const Teams = () => {
  return (
    <>
     <Navbar/>
    <div className="Teams-container">  
        <h1>Teams will be available soon....</h1>
        <img src={tools} alt="tools" width={180}/>
    </div>
    </>
  )
}

export default Teams