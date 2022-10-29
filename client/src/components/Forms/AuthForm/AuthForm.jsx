import React from 'react'
import { TextInput } from '../../Inputs/AuthFormInputs/TextInput/TextInput'
import { CheckInput } from '../../Inputs/AuthFormInputs/CheckInput/CheckInput'
import { Button } from '../../Buttons/AuthFormButtons/Button'
import classes from './AuthForm.module.css'

export const AuthForm = ({ openModalWindows, ...props }) => {
  const authData = {
    login: '',
    pass: '',
  }

  const toSignIn = (event) => {
    event.preventDefault()
  }

  return (
    <div className={classes.formContainer}>
      <p className={classes.formTitle}>AUTHORIZATION</p>
      <form className={classes.authForm}>
        <TextInput id="login" type="text" placeholder="Login/E-mail/Phone" />
        <TextInput id="pass" type="password" placeholder="Password" />
        <div className={classes.formSection}>
          <CheckInput id="Remember" title="Remember me" />
          <Button title="Sign in" onClick={openModalWindows} />
        </div>
        <Button title="Forgot password?" onClick={toSignIn} />
      </form>
    </div>
  )
}
