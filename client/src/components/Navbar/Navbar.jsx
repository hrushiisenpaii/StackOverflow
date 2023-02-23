import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/stacklogo.png'
import search from '../../assests/searchlogo.svg'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {

    var User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
    },[dispatch])

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
                    <Link to='/User' style={{color:'white', textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                </Avatar>
                <button className='nav-item  nav-links'>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default Navbar