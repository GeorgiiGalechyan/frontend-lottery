import React from 'react'
import { useState } from 'react'

export const AuthForm = () => {
  const [remember, setRemember] = useState(true)

  const checkValueChange = () => {
    setRemember((current) => !current)
  }

  return (
    <div className="AuthForm">
      <p className="FormTitle">A U T H O R I Z A T I O N</p>
      <form>
        <input type="text" placeholder="Login/E-mail/Phone" className="authFormInput" />
        <input type="password" placeholder="Password" className="authFormInput" />
        <input
          type="checkbox"
          className="authFormCheck"
          defaultChecked={true}
          value={remember}
          onChange={checkValueChange}
        ></input>
        <button className="signInBtn">Sign in</button>,
      </form>
    </div>
  )
}
