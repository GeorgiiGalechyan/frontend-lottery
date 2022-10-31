import React from 'react'
import cl from './CheckInput.module.css'

export const CheckInput = ({ id, label, ...props }) => {
  return (
    <div className={cl.ChecklabelSection}>
      <input type="checkbox" id={id} className={cl.CheckInput} {...props} />
      <label className={cl.Label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
