import React from 'react'
import classes from './RecoverPassModal.module.css'

export const RecoverPassModal = () => {
  const stopCloseModalOnClick = (e) => e.stopPropagation()
  const closeModal = () => {}

  const getContent = () => {
    return
  }

  return (
    <div className={classes.spaceAroundModal} onClick={closeModal}>
      <div className={classes.modal} onClick={stopCloseModalOnClick}>
        <button className={classes.closeBtn} onClick={closeModal}>
          X
        </button>
        <div className={classes.modalWindowsContent}>{getContent}</div>
        {getContent}
      </div>
    </div>
  )
}
