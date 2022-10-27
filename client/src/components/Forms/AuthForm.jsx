import React from 'react'
import { useState } from 'react'

import '../../styles/components/Forms/AuthForm.css'

export const AuthForm = () => {
  const [remember, setRemember] = useState(true)

  const checkValueChange = () => {
    setRemember((current) => !current)
  }

const handleOpen = ()=> {
  
}

  return (
    <div className="AuthFormContainer">
      <p className="FormTitle">A U T H O R I Z A T I O N</p>
      <form className="AuthForm">
        <input type="text" placeholder="Login/E-mail/Phone" className="AuthFormInput" />
        <input type="password" placeholder="Password" className="AuthFormInput" />
        <input
          type="checkbox"
          className="AuthFormCheckbox"
          defaultChecked={true}
          value={remember}
          onChange={checkValueChange}
        />
        <input type="submit" className="AuthFormSubmit" value="Sign in" />
        <button className="AuthFormButtonLink" onClick={handleOpen}>Forgot password?</button>
      </form>
    </div>
  )
}
