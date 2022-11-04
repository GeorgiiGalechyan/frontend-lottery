// ================= React ================= //

import React from 'react'
import { useState } from 'react'

// ============== Components ============== //

import { Button } from '../UI/Button/Button'
import { Modal } from '../Modals/Modal/Modal'
import { AuthForm } from './Auth/ModalContents/Authorization/AuthForm'

// ================ Style ================ //
import cl from './Header.module.css'

// =============== HEADER =============== //

export const Header = ({ children, ...props }) => {
  const [modal, setModal] = useState(false)

  const recoverPass = () => console.log('recoverPass')

  return (
    <header className={cl.Header}>
      <Button onClick={() => setModal(true)}>Sign in</Button>
      <Modal visible={modal} setVisible={() => setModal(false)}>
        <AuthForm></AuthForm>
        <button onClick={recoverPass}>Forgot password?</button>
      </Modal>
    </header>
  )
}
