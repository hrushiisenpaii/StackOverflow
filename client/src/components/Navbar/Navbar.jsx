import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'

import './Navbar.css'
import logo from '../../assests/stacklogo.png'
import search from '../../assests/searchlogo.svg'
import Avatar from '../../components/Avatar/Avatar'

const Navbar = () => {

    var User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    useEffect(() => {
        const token = User?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout();
          }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      }, [User?.token, dispatch]);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
        Navigate('/')
        dispatch(setCurrentUser(null))
        alert("You have been logged out..")
    }

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
                <Avatar className='navchild'>
                    <Link to={`/User/${User?.result?._id}`} style={{color:'white', textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                </Avatar>
                <button className='nav-item  nav-links' onClick={handleLogout}>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default Navbar