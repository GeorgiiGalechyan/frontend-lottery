import React from 'react'

// Components
import { Header } from './components/Header/Header'

import { Screen } from './components/Screen/Screen'
import { StartScreen } from './components/Screen/ScreenContents/StartScreen/StartScreen'

import { Footer } from './components/Footer/Footer'

// Styles
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Screen>
        <StartScreen />
      </Screen>
      <Footer />
    </div>
  )
}
