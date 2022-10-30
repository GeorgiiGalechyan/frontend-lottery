import React from 'react'
import { Button } from '../../Buttons/StartMenuButtons/Button'

import classes from './ButtonsList.module.css'

export const ButtonList = ({ buttons }) => {
  const Buttons = buttons.map((btn) => <Button key={btn.id} title={btn.title} onClick={btn.onClick} />)

  return <div className={classes.BtnList}>{Buttons}</div>
}
