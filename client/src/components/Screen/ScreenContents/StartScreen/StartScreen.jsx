import React from 'react'
import { StartMenu } from './StartMenu/StartMenu'

export const StartScreen = () => {
  const items = [
    { id: 1, title: 'Continue', onClick: null },
    { id: 2, title: 'Create new gamer', onClick: null },
    { id: 3, title: 'Choose a game', onClick: null },
    { id: 4, title: 'Rating', onClick: null },
    { id: 5, title: 'Exit', onClick: null },
  ]

  return (
    <>
      <StartMenu menuItems={items} />
    </>
  )
}
