import React from 'react'
import cl from './Modal.module.css'

export const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.Modal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={setVisible}>
      <div className={cl.ModalContent}>
        <button className={cl.closeBtn} onClick={setVisible}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
