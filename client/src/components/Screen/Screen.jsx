import React from 'react'

// Styles
import cl from './Screen.module.css'

// Component
export const Screen = ({ children, ...props }) => {
  return (
    <div className={cl.Screens} {...props}>
      {children}
    </div>
  )
}
