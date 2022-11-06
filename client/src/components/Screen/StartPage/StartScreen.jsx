import React from 'react'
// import { StartMenu } from './StartMenu/StartMenu'

// Children Components
import { ScreenTitle } from '../../../UI/Title/ScreenTitle/ScreenTitle'

// Styles
import cl from './StartScreen.module.css'

//Component
export const StartScreen = () => {
  return (
    <div className={cl.StartScreen}>
      <ScreenTitle> Welcome to the Kingdom of Lottery </ScreenTitle>
    </div>
  )

  /*  const items = [
    { id: 1, title: 'Continue', onClick: null },
    { id: 2, title: 'Create new gamer', onClick: null },
    { id: 3, title: 'Choose a game', onClick: null },
    { id: 4, title: 'Rating', onClick: null },
    { id: 5, title: 'Exit', onClick: null },
  ]

  return (
    <div className={cl.ScreenContent}>
      <StartMenu menuItems={items} />
    </div>
  )*/
}
