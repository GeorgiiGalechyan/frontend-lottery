import React from 'react'
import { Button } from './Button'

import '../styles/components/ButtonList.css'

export const ButtonList = (props) => {
  const buttons = props.buttons

  const ListBtn = buttons.map((button) => <Button title={button.title} />)
  return <div className="ButtonList">{ListBtn}</div>
}
