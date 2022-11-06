import React from 'react'

// Styles
import cl from './Screen.module.css'

// Component
export const Screen = ({ children, ...props }) => {
  return (
    <main className={cl.Screen} {...props}>
      {children}
    </main>
  )
}
