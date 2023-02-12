import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/stacklogo.png'
import search from '../../assests/searchlogo.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {

    const User = null

  return (
    <nav className='main-nav'>
        <div className='navbar'>

            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="logo" width={140} height={40}/>
            </Link>

            <Link to='/About' className='nav-item nav-btn'>About</Link>
            <Link to='/Product' className='nav-item nav-btn'>Products</Link>
            <Link to='/Teams' className='nav-item nav-btn'>For Teams</Link>

            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} alt="searchicon" className='search-icon' width={18}/>
            </form>

            { User === null ? 
                <Link to='/Auth' className='nav-item  nav-links' >
                    Log in
                </Link> :

                <>
                <Avatar>
                    <Link to='/User' style={{color:'white', textDecoration:'none'}}> HP</Link>
                </Avatar>
                <button className='nav-item  nav-links'>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default Navbar