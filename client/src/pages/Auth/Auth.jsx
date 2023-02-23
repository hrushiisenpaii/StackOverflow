import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assests/loginicon.png'
import AboutAuth from './AboutAuth'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signup, login } from '../../actions/auth.js'

const Auth = () => {

  const [ IsSignup, SetIsSignup ] = useState(false)
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleSwitch = () => {
    SetIsSignup(!IsSignup)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if(IsSignup){
      if(!name){
          alert("Enter a name to continue")
      }
      dispatch(signup({ name, email, password }, navigate))
    }else{
      dispatch(login({ email, password }, navigate))
    }
  }

  return (
    <section className='auth-section'>
      <div className='auth-container-1'>
      {
        IsSignup && (
          <AboutAuth/>
        )
      }
      </div>
      

      <div className='auth-container-2'>
      <a href="/">
      <img  src={icon} alt='StackOverflowIcon' className='logo-icon' width={150}/>
      </a>
      <div>
        { !IsSignup }
        <form onSubmit={handelSubmit}>
          {
            IsSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email'  onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div className='password-box'>
              <h4>Password</h4>
              {
                !IsSignup &&  
                <h4 className='forgot-pass'>Forgot Password?</h4>
              }
            </div>

            <input type="password" name='password' id='password'  onChange={(e) => {setPassword(e.target.value)}}/>
            { IsSignup && 
            <p className='password'>
              Password must contain at least eight characters, including 
              at least 1 <br /> number and 1 special character.
            </p>  
            }

          </label>
          {
            IsSignup && (
              <label htmlFor="check" className='check'>
                <input type="checkbox" id='check' />
                <p className='check'>Opt-into recieve occasional 
                <br /> updates and announcements.</p>
              </label>
            )
          }

          <button type='submit' className='auth-btn'>{ !IsSignup ? 'Log in ' : 'Sign up' }</button>
          {
            IsSignup && (
              <p className='terms'>
                By clicking "Sign up", you agree to our 
                <span> <a href="/">terms of services</a> </span>,
                <span> <a href="/">privacy policy</a> </span> 
                and <span> <a href="/">cookie policy</a> </span>.
              </p>
            )
          }
        </form>
        
        
      </div>
      <p>
          {IsSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-Switch-btn' onClick={handleSwitch}>{ IsSignup ? "Log in" : "Sign up" }</button>
        </p>
      </div>

    </section>
  )
}

export default Auth