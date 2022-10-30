import React from 'react'
import { ButtonList as StartMenu } from '../../ButtonsList/StartMenuBtnList/ButtonsList'
import classes from './StartScreen.module.css'

export const StartScreen = ({ children, startMenuHandlers }) => {
  const buttons = [
    { id: 1, title: 'Continue', onClick: null },
    { id: 2, title: 'Create new gamer', onClick: null },
    { id: 3, title: 'Choose a game', onClick: null },
    { id: 4, title: 'Rating', onClick: null },
    { id: 5, title: 'Exit', onClick: null },
  ]

  return (
    <div className={classes.screen}>
      <StartMenu buttons={buttons} />
      {children}
    </div>
  )
}
