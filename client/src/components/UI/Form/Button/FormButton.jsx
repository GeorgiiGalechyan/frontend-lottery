import React from 'react'
import cl from './FormButton.module.css'

export const FormButton = ({ children, ...props }) => {
  return (
    <button className={cl.FormButton} listType="button" {...props}>
      {children || 'Error Children Value'}
    </button>
  )
}
