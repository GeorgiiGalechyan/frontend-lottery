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
  const [authData, setAuthData] = useState({ login: '', password: '', isRemember: true })

  const changeValue = (event) => {
    let { id, value, type, checked = '' } = event.target
    if (type === 'checkbox') {
      value = checked
    }

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
        <CheckInput
          id="isRemember"
          value={authData.isRemember}
          onChange={changeValue}
          checked={authData.isRemember}
          label="Remember me"
        />
        <Button title="Sign in" onClick={signIn} />
        <Button title="Forgot password?" onClick={handlers} />
      </form>
    </div>
  )
}
