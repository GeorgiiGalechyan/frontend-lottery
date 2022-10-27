import React from 'react'
import { Header } from './components/Header/Header'
import { StartScreen } from './pages/StartScreen'
import { Footer } from './components/Footer/Footer'

import './styles/App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <StartScreen />
      <Footer />
    </div>
  )
}
