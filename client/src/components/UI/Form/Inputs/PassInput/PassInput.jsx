import React from 'react'
import cl from './PassInput.module.css'

export const PassInput = ({ ...props }) => {
  return <input type="password" className={cl.PassInput} {...props} />
}
