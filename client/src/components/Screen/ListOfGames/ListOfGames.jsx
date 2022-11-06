import React from 'react'

// Children Components
import { ScreenTitle } from '../../../UI/Title/ScreenTitle/ScreenTitle'
import { CardTitle } from '../../../UI/Title/CardTitle/CardTitle'

// Style
import cl from './ListOfGames.module.css'

// Component
export const ListOfGames = (gameData) => {
  // Нужно добавить карточки с играми, чтобы игром мог выбрать игру.

  return (
    <div className={cl.ListOfGames}>
      <ScreenTitle>List of Games</ScreenTitle>
      <div className={cl.Games}>
        <div className={cl.Card}>
          <CardTitle> Title 1 </CardTitle>
        </div>
        <div className={cl.Card}>
          <CardTitle> Title 2 </CardTitle>
        </div>
        <div className={cl.Card}>
          <CardTitle> Title 3 </CardTitle>
        </div>
      </div>
    </div>
  )
}

// Cсделать компонент - карточка игры
