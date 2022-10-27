import React from 'react'
import { AuthForm } from '../components/AuthForm.jsx'
import { ButtonList } from '../components/ButtonList'

import '../styles/components/Screens.css'

export const StartScreen = () => {
  const buttons = [
    {
      title: 'Сontinue',
    },
    {
      title: 'Сhoose a game',
    },
    {
      title: 'Create new gamer',
    },
    {
      title: 'Rating',
    },
    {
      title: 'Exit',
    },
  ]
  return (
    <div className="Screens">
      <AuthForm />
      <ButtonList buttons={buttons} />
    </div>
  )
}
