import React from 'react'
import { useState } from 'react'

// UI components
import { Form } from '../../../../Form/Form'
import { FormTitle } from '../../../../UI/Form/Title/FormTitle'
import { TextInput } from '../../../../UI/Form/Inputs/TextInput/TextInput'
import { PassInput } from '../../../../UI/Form/Inputs/PassInput/PassInput'
import { CheckInput } from '../../../../UI/Form/Inputs/Checkbox/CheckInput'
import { FormButton } from '../../../../UI/Form/Button/FormButton'

// Styles
import cl from './AuthForm.module.css'

// Component
export const AuthForm = ({ children, ...props }) => {
  const [authData, setAuthData] = useState({ login: '', password: '', isRemember: true })

  const changeValue = (event) => {
    let { id, value, type, checked = '' } = event.target
    if (type === 'checkbox') {
      value = checked
    }

    setAuthData((prevAuthData) => ({ ...prevAuthData, [id]: value }))
  }

  const signIn = () => {
    console.log(authData)
  }

  return (
    <Form className={cl.AuthForm} onSubmit={(e) => e.preventDefault()}>
      <FormTitle>Authorization</FormTitle>
      <TextInput id="login" placeholder="Login/E-mail/Phone" value={authData.login} onChange={changeValue} />
      <PassInput id="password" placeholder="Password" value={authData.password} onChange={changeValue} />
      <CheckInput
        id="isRemember"
        value={authData.isRemember}
        onChange={changeValue}
        checked={authData.isRemember}
        label="Remember me"
      />
      <FormButton onClick={signIn}>Sign in</FormButton>
    </Form>
  )
}
