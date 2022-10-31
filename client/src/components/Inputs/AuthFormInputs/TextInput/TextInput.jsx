import React from 'react'
import classes from './TextInput.module.css'

export const TextInput = ({ ...props }) => {
  return <input type="text" className={classes.textInput} {...props} />
}
