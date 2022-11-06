import React from 'react'

import cl from './Item.module.css'

export const Item = ({ children, ...props }) => {
  return (
    <a href="" className={cl.Item} {...props}>
      {children}
    </a>
  )
}
