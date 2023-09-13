import { useState } from "react"
import Headers from "./components/Header/Headers"
import LoginPage from "./components/LoginPage/LoginPage"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  const [login ,setLogin] =useState(false)
  return (
    <>
      {/* <LoginPage/> */}
      <BrowserRouter>
        
        <Routes>
        
          <Route path="/" element={<Headers login={login} />} />
          <Route path="/login" element={<LoginPage setLogin={setLogin} />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
