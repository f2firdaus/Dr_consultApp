import React, { useState } from 'react'
import './loginpage.css'
import { useNavigate } from 'react-router-dom'
const LoginPage = ({setLogin}) => {

    
    const navigate= useNavigate()
    const loginBtn = (e) => {
        e.preventDefault()
        navigate('/')
        console.log("submit")
        setLogin(true)
    }
  return (
      <>
          <div className="login-container">
        
              <div className="login-box">
            
                  <div className="login-logo">
                      <h1>Schedula</h1>
                  </div>  
                  <div className="login-form">
                  <form action="" onSubmit={loginBtn}>
                      <input className='login-input' type="text" placeholder='Name' required />
                      <input type="number" className='login-input' placeholder='Age' required />
                          <input type="number" className='login-input' placeholder='Phone Number' required />
                          <button className='login-button' type='submit'>Login</button>
                      </form>
                      </div>
              </div>
          </div>
    </>
  )
}

export default LoginPage