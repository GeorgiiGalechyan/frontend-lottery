import React from 'react'
import { useState } from 'react'
import classes from './AuthForm.module.css'

export const AuthForm = ({ toOpenModalWindows }) => {
  const [remember, setRemember] = useState(true)

  const toChangeCheckValue = () => {
    setRemember((current) => !current)
  }

  const toSignIn = () => {}

  const toRecoverPass = toOpenModalWindows

  return (
    <div className={classes.formContainer}>
      <p className={classes.formTitle}>AUTHORIZATION</p>
      <form className={classes.authForm}>
        <input id="login-mail-phone" className={classes.textInput} type="text" placeholder="Login/E-mail/Phone" />
        <input id="password" className={classes.textInput} type="password" placeholder="Password" />
        <div class={classes.checkboxContainer}>
          <input
            id="isRemember"
            className={classes.checkbox}
            type="checkbox"
            checked={remember}
            defaultChecked={remember}
            onChange={toChangeCheckValue}
          />
          <label className={classes.checkboxLabel} htmlFor="isRemember">
            Remember me
          </label>
          <button className={classes.recoverPassBtn} onClick={toRecoverPass}>
            Forgot password?
          </button>
        </div>

        <input type="submit" className={classes.signInBtn} value="Sign in" onClick={toSignIn} />
      </form>
    </div>
  )
}
