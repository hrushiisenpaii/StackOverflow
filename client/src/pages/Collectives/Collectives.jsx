import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Footer from '../../components/Footer/Footer'

const Collectives = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container-1">  
        <LeftSidebar/>
        <div className="home-container-2">
          <div className="collective-container">  
            <h1>Collectives will be available soon....</h1>
          </div> 
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Collectives