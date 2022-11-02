// ================= React ================= //

import React from 'react'
import { useState } from 'react'

// ============== Components ============== //

import { AuthButton } from '../UI/AuthButton/AuthButton'
import { Modal } from '../Modals/Modal/Modal'
import { AuthForm } from '../Forms/AuthForm/AuthForm'
import { RegForm } from '../Forms/RegForm/RegForm'
import { RecoverPass } from '../Forms/RecoverPassForm/StartScreen/RecoverPassStartScreen'

// ================ Style ================ //

import cl from './Header.module.css'
import { RecoverPassForm } from '../Forms/RecoverPassForm/StartScreen/RecoverPassStartScreen'

// =============== HEADER =============== //

export const Header = ({ children, ...props }) => {
  const [modal, setModal] = useState(false)
  const [authForm, setAuthForm] = useState(true)
  const [regForm, setRegForm] = useState(false)

  const recoverPass = () => {
    console.log('recoverPassHandler')
  }

  return (
    <div className={cl.Header}>
      <AuthButton title="Sign In" onClick={() => setModal(true)} />
      <Modal visible={modal} setVisible={() => setModal(false)}>
        {Boolean(authForm) && <AuthForm handlers={null} />}
        {Boolean(regForm) && <RegForm />}
        {Boolean(regForm) && <RecoverPass />}
      </Modal>
    </div>
  )
}
