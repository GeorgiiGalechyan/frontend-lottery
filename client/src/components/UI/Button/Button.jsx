import React from 'react'
import cl from './Button.module.css'

export const Button = ({ children, ...props }) => (
  <button className={cl.Button} {...props}>
    {children || 'Error Children value'}
  </button>
)
