import React from 'react'
import cl from './AuthButton.module.css'

export const AuthButton = ({ title, ...props }) => (
  <button className={cl.authBtn} {...props}>
    {title}
  </button>
)
