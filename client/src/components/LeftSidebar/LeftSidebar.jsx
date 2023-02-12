import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Tag from '../../assests/Tags.svg'
import User from '../../assests/User.svg'
import Globe from '../../assests/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className="side-nav-links" activeClass='active'>
                <p>
                    Home
                </p>
            </NavLink>
            <div className='side-nav-div'>
                <div>
                    <p>
                        Public
                    </p>
                    <NavLink to='/Questions' className='points side-nav-links' activeClass='active'>
                        <img src={Globe} width={20} alt="Globe" />
                        <p className='question'>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='points side-nav-links' activeClass='active'>
                        <img src={Tag} width={20} alt="Globe" />
                        <p className='tags'>Tags</p>
                    </NavLink>
                    <NavLink to='/User' className='points side-nav-links' activeClass='active'>
                        <img src={User} width={20} alt="Globe" />
                        <p className='user'>Users</p>
                    </NavLink>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar