import React from 'react'
import { Menu } from '../../../../UI/Menu/Menu'

import cl from './StartMenu.module.css'

export const StartMenu = ({ menuItems }) => {
  

  return (
    <>
      <Menu menuItems={menuItems} className={cl.StartMenu} />
    </>
  )
}
