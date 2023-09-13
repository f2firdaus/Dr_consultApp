import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
const Headers = ({login}) => {
    const navigate =useNavigate()
  return (
      <>
          <div className="header-container">
              <div className="header-logo">
                  <h2>Schedula</h2>
              </div>
              <div className="header-input">
                  <input type="text" placeholder='Find your Dr here' />
                  <button className='search-btn'>Search</button>
              </div>
              <div className="header-login">
                  {login ? <button className='h-login-btn'>Logout</button> :
                  <button className='h-login-btn' onClick={()=>navigate('/login')}>Login</button>
                  }
                  
              </div>
          </div>   
          <div className="h-body">
              <p>Find you Dr to book an appointment</p>
          </div>
    </>
  )
}

export default Headers