import React from 'react'
import { Header } from './components/Header/Header'
import { StartScreen } from './components/Screens/StartScreen/StartScreen'
import { Footer } from './components/Footer/Footer'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <StartScreen />
      <Footer />
    </div>
  )
}
