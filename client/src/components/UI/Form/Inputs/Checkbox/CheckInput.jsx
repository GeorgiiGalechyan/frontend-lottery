import React from 'react'
import cl from './CheckInput.module.css'

export const CheckInput = ({ id, label, ...props }) => {
  return (
    <>
      <input type="checkbox" id={id} className={cl.CheckInput} {...props} />
      {Boolean(label) && (
        <label className={cl.Label} htmlFor={id}>
          {label}
        </label>
      )}
    </>
  )
}
