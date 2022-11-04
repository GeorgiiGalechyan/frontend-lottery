import React from 'react'
import cl from './Form.module.css'

export const Form = ({ children, ...props }) => {
  return (
    <form className={cl.Form} {...props}>
      {children}
    </form>
  )
}
