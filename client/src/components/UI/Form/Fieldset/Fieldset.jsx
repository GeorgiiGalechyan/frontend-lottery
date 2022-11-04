import React from 'react'
import cl from './Form.module.css'

export const Fieldset = ({ children, legend, ...props }) => {
  return (
    <Fieldset {...props}>
      {Boolean(legend) && <legend>{legend}</legend>}
      {children}
    </Fieldset>
  )
}
