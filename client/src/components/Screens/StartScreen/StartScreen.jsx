import React from 'react'
import { AuthForm } from '../../Forms/AuthForm/AuthForm'
import { ButtonList as StartMenu } from '../../ButtonLists/StartMenuBtnList/ButtonsList'
import classes from './StartScreen.module.css'

export const StartScreen = () => {
  const menuButons = [
    { id: 1, title: 'Continue' },
    { id: 2, title: 'Choose a game' },
    { id: 3, title: 'Create new gamer' },
    { id: 4, title: 'Rating' },
    { id: 5, title: 'Exit' },
  ]

  return (
    <div className={classes.screen}>
      <AuthForm />
      <StartMenu buttons={menuButons} />
    </div>
  )
}
