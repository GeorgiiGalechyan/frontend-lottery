import React from 'react'
import { Button } from '../../../Buttons/AuthFormButtons/Button'
import cl from './RecoverPassStartScreen.module.css'

//=====================================================================

export const RecoverPass = () => {
  return (
    <div className={cl.formContainer}>
      <p className={cl.formTitle}>RECOVER PASSWORD</p>
      <p className={cl.formSubTitle}>Choose way recover password</p>
      <Button title="Sign in" onClick={null} />
      <Button title="Forgot password?" onClick={null} />
    </div>
  )
}
