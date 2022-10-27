import React from 'react'
import { Header } from './components/Header/Header'
import { StartScreen } from './components/Screens/StartScreen'
import { Footer } from './components/Footer/Footer'
import { Modal } from './components/Modals/ForgottenPassword'

import './styles/App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <StartScreen />
      <Footer />
      <Modal />
    </div>
  )
}
