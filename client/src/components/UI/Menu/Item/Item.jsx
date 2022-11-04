import React from 'react'

import cl from './Item.module.css'

export const Item = ({ title, ...props }) => {
  return (
    <a href="" className={cl.Item} {...props}>
      {title}
    </a>
  )
}
