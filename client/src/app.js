import React from 'react'
import { useState } from 'react'
import { AuthButton } from './components/UI/AuthButton/AuthButton'
import { StartScreen } from './components/Screens/StartScreen/StartScreen'
import { Modal } from './components/Modals/Modal/Modal'
import { AuthForm } from './components/Forms/AuthForm/AuthForm'
import { Footer } from './components/Footer/Footer'
import cl from './App.module.css'

export const App = () => {
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const recoverPassHandler = () => {
    console.log('recoverPassHandler')
  }

  return (
    <div className={cl.App}>
      <AuthButton title="Sign In" onClick={openModal} />
      <StartScreen>
        <Modal visible={modal} setVisible={closeModal}>
          {/*<AuthForm handlers={recoverPassHandler} />*/}
        </Modal>
      </StartScreen>

      <Footer />
    </div>
  )
}
