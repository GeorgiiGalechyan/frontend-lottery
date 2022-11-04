import React from 'react'
import cl from './FormTitle.module.css'

export const FormTitle = ({ children, ...props }) => {
  return (
    <h3 className={cl.FormTitle} {...props}>
      {children}
    </h3>
  )
}
