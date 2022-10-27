import { useCallback, useState } from 'react'

export const useModalState = () => {
  const [ModalState, setModalState] = useState(false)

  const openModalWindows = useCallback(() => {
    setModalState((currentModalState) => !currentModalState)
  }, [])

  const closeModalWindows = useCallback(() => {
    setModalState((currentModalState) => !currentModalState)
  }, [])

  return { ModalState, openModalWindows, closeModalWindows }
}
