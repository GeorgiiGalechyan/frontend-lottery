import React from 'react'
import classes from './TextInput.module.css'

export const TextInput = ({ ...props }) => {
  return <input className={classes.textInput} {...props} />
}
