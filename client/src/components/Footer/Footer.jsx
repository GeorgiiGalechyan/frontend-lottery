import React from 'react'
import cl from './Footer.module.css'

export const Footer = ({ children, ...props }) => {
  return (
    <footer className={cl.Footer} {...props}>
      {children}
      <p className={cl.Text}> Developed by Georgii Galechyan in 2022 </p>
    </footer>
  )
}
