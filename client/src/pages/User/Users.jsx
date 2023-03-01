import React from 'react'
import { useLocation } from 'react-router-dom'

import './Users.css'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
//start 37 video
const Users = () => {

    const location = useLocation()

  return (
<>
    <Navbar/>
    <div className="home-container-1">  
        <LeftSidebar/>
        <div className="home-container-2">
            <h1>All Current Users</h1>
            {
                location.pathname === '/User' ?
                <UsersList /> :
                <></>
            }
        </div>
    </div>
</>  
  )
}

export default Users