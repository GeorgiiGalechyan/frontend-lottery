import React from 'react'
import cl from './Button.module.css'

export const Button = ({ title, ...props }) => {
  return (
    <button className={cl.startMenuBtn} {...props}>
      {title || 'Странное значение title... '}
    </button>
  )
}
