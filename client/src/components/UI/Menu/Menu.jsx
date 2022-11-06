import React from 'react'
import { Item } from './Item/Item'

import cl from './Menu.module.css'

export const Menu = ({ menuItems }) => {

  const Items = menuItems.map((i) => <Item key={i.id} onClick={i.onClick} >{i.title}</Item>)

  return <div className={cl.Menu}>{Items}</div>
}
