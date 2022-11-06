import React from 'react'

import cl from './Game.module.css'

export const Game = ({ children, ...props }) => {
  return (
    <div className={cl.Game} {...props}>
      {children}
    </div>
  )
}
