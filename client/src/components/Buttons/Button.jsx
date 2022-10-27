import React from 'react'

import '../../styles/components/Buttons/Button.css'

export const Button = (props) => {
  return <button className="AllButtons">{props.title || 'Странное значение title... '}</button>
}

