import React from 'react'
import { useState } from 'react'
import classes from './TextInput.module.css'

export const TextInput = ({ ...props }) => {
  const [state, setState] = useState()

  const onChange = (event) => {
    setState(event.target.value)
  }

  return <input className={classes.textInput} value={state} onChange={onChange} {...props} />
}
