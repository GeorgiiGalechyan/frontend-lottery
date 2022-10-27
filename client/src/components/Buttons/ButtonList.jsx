import React from 'react'
import { Button } from './Button'

import '../../styles/components/Buttons/ButtonList.css'

export const ButtonList = (props) => {
  const buttons = props.buttons

  const ListBtn = buttons.map((button) => (
    <Button className="startScreenButtons" key={button.id} title={button.title} />
  ))
  return <div className="ButtonList">{ListBtn}</div>
}
