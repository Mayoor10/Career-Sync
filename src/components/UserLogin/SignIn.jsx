import React from 'react'
import './Common.css'
import email_icon from '..//../../public/images/email.png'
import password_icon from '..//../../public/images/password.png'

const SignIn = () => {

  return (
    <div className='container'>
      <div className="header">
        <img src="/images/login-logo.svg" alt="" />
        
      </div>
      <div className="inputs">
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">Sign In</div>
      </div>
      <div className="Account">Not a member ? <a href="/SignUp" className='link'>Sign Up</a></div>

    </div>
  )
}

export default SignIn
