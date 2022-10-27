import React from 'react'
import { AuthForm } from '../Forms/AuthForm.jsx'
import { ButtonList } from '../Buttons/ButtonList'
import { Modal } from '../Modals/ForgottenPassword'
import { useModalState } from '../../hooks/useModal.jsx'

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

  // Обрабатываем Открытие и Закрытие модального окна
  const { ModalState, openModalWindows, closeModalWindows } = useModalState(false)

  return (
    <div className="Screens">
      <AuthForm />
      <ButtonList buttons={getButtons()} />
      <Modal state={ModalState} open={openModalWindows} close={closeModalWindows} />
    </div>
  )
}
