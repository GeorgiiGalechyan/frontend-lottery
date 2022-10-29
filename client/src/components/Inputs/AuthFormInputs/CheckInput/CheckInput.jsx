import React from 'react'
import { useState } from 'react'
import classes from './CheckInput.module.css'

export const CheckInput = ({ id, title, ...props }) => {
  const [remember, setRemember] = useState(true)

  const toChangeCheckValue = () => {
    setRemember((current) => !current)
  }

  return (
    <>
      <input
        id={id}
        type="checkbox"
        className={classes.checkInput}
        checked={remember}
        onChange={toChangeCheckValue}
        {...props}
      />
      <label className={classes.checkLabel} htmlFor={id}>
        {title}
      </label>
    </>
  )
}
