import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import AboutDetails from './AboutDetails'
import Footer from '../../components/Footer/Footer'
import './About.css'

const About = () => {
  return (
    <>
     <Navbar/>
    <div className="home-container-1">  
        <LeftSidebar/>
        <div className="home-container-2">
          <h1 className='head'>About</h1>
          <AboutDetails/>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default About