import React from 'react'
import classes from './Button.module.css'

export const Button = ({ title, ...props }) => {
  return (
    <button className={classes.allBtn} {...props}>
      {title || 'Странное значение title... '}
    </button>
  )
}
