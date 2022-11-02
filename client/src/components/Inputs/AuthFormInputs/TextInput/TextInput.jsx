import React from 'react'
import cl from './TextInput.module.css'

export const TextInput = ({ ...props }) => {
  return <input type="text" className={cl.textInput} {...props} />
}
