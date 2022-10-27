import React from 'react'

import '../../styles/components/Modals/ForgottenPassword.css'

export const Modal = ({ ModalState, openModalWindows, closeModalWindows }) => {
  const submitHandle = () => {}

  return (
    <div className="modal" onClick={closeModalWindows}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalCloseButton" onClick={closeModalWindows}>
          X
        </button>
        <p className="modalTitle">Enter your email address</p>
        <form>
          <input type="submit" onClick={submitHandle} />
        </form>
      </div>
    </div>
  )
}
