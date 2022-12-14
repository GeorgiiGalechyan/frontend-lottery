import React from 'react'
import classes from './Button.module.css'

export const Button = ({ title, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {title || 'Error value'}
    </button>
  )
}
