import React from 'react'
import { StartScreen } from './components/Screens/StartScreen/StartScreen'
import { Footer } from './components/Footer/Footer'

import classes from './App.module.css'

export const App = () => {
  return (
    <div className={classes.App}>
      <StartScreen />
      <Footer />
    </div>
  )
}

