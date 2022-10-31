import React from 'react'
import { useState } from 'react'
import { TextInput } from '../../Inputs/AuthFormInputs/TextInput/TextInput'
import { PassInput } from '../../Inputs/AuthFormInputs/PassInput/PassInput'
import { CheckInput } from '../../Inputs/AuthFormInputs/CheckInput/CheckInput'
import { Button } from '../../Buttons/AuthFormButtons/Button'
import classes from './AuthForm.module.css'

//=====================================================================

export const AuthForm = ({ handlers }) => {
  // Отлавиваем состояние input элементов
  const [authData, setAuthData] = useState({ login: '', password: '', remember: '' })

  // Связываем введенные в input данные со state (authData)
  const changeValue = (event) => {
    const { id, value } = event.target
    setAuthData((prevAuthData) => ({ ...prevAuthData, [id]: value }))
  }

  // Авторизация. Отправляем на сервер объект authData с данными для аторизации
  const signIn = () => {
    console.log(authData)
  }

  // Возвращаем (рендерим) компонент
  return (
    <div className={classes.formContainer}>
      <p className={classes.formTitle}>AUTHORIZATION</p>
      <form onSubmit={(e) => e.preventDefault()} className={classes.authForm}>
        <TextInput id="login" placeholder="Login/E-mail/Phone" value={authData.login} onChange={changeValue} />
        <PassInput id="password" placeholder="Password" value={authData.password} onChange={changeValue} />
        <CheckInput id="remember" value={authData.remember} onChange={changeValue} label="Remember me" />
        <Button title="Sign in" onClick={signIn} />
        <Button title="Forgot password?" onClick={handlers} />
      </form>
    </div>
  )
}

