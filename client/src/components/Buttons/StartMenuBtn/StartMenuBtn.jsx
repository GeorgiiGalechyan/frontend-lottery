import React from 'react'
import classes from './StartMenuBtn.module.css'

export const Button = ({ title, ...props }) => {
  return <button className={classes.allBtn}>{title || 'Странное значение title... '}</button>
}
