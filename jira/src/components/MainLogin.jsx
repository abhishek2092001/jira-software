import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function MainLogin() {
    const [currentForm, setCurrentForm] = useState('login');
  return (
    <div className="App01">
      {
        // <Login/>
        currentForm === "login" ? <Login onFormSwitch={(formname)=>{setCurrentForm(formname)}} /> : <Register onFormSwitch={(formname)=>{setCurrentForm(formname)}} />
      }
    </div>
  )
}

export default MainLogin