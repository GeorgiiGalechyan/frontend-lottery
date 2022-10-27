import React from 'react'
import { AuthForm } from '../Forms/AuthForm.jsx'
import { ButtonList } from '../Buttons/ButtonList'

import '../../styles/components/Screens/Screens.css'

export const StartScreen = () => {
  // Поучаем опции кнопок
  const getButtons = () => {
    return [
      { id: 1, title: 'Сontinue' },
      { id: 2, title: 'Сhoose a game' },
      { id: 3, title: 'Create new gamer' },
      { id: 4, title: 'Rating' },
      { id: 5, title: 'Exit' },
    ]
  }

  return (
    <div className="Screens">
      <AuthForm />
      <ButtonList buttons={getButtons()} />
    </div>
  )
}
