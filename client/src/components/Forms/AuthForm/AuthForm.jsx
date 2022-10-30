import React from 'react'
import { useState } from 'react'
import { TextInput } from '../../Inputs/AuthFormInputs/TextInput/TextInput'
import { CheckInput } from '../../Inputs/AuthFormInputs/CheckInput/CheckInput'
import { Button } from '../../Buttons/AuthFormButtons/Button'
import classes from './AuthForm.module.css'

export const AuthForm = ({ handlers }) => {
  const [authData, setAuthData] = useState({ login: '', password: '' })

  // Связываем введенные в input данные со state (authData)
  const changeValue = (event) => {
    const { id, value } = event.target
    setAuthData((prevAuthData) => ({ ...prevAuthData, [id]: value }))
  }

  // Авторизация. Отправляем на сервер объект authData с данными для аторизации
  const signIn = () => {
    console.log(authData)
  }

  return (
    <div className={classes.formContainer}>
      <p className={classes.formTitle}>AUTHORIZATION</p>
      <form onSubmit={(e) => e.preventDefault()} className={classes.authForm}>
        <TextInput
          id="login"
          type="text"
          placeholder="Login/E-mail/Phone"
          value={authData.login}
          onChange={changeValue}
        />
        <TextInput id="password" type="text" placeholder="Password" value={authData.password} onChange={changeValue} />
        <CheckInput id="Remember" title="Remember me" />
        <Button title="Sign in" onClick={signIn} />
        <Button title="Forgot password?" onClick={handlers} />
      </form>
    </div>
  )
}
