import React from 'react'
import cl from './Footer.module.css'

export const Footer = ({ children }) => {
  return (
    <footer className={cl.Footer}>
      {children}
      <p className={cl.FooterText}> Developed by Georgii Galechyan in 2022 </p>
    </footer>
  )
}
