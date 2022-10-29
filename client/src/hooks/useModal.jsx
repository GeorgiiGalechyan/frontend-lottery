import { useCallback, useState } from 'react'

export const useModalState = () => {
  const [ModalState, setModalState] = useState(false)

  const openModalWindows = useCallback(() => {
    setModalState((currentModalState) => (currentModalState = true))
  }, [])

  const closeModalWindows = useCallback(() => {
    setModalState((currentModalState) => (currentModalState = false))
  }, [])

  return { ModalState, openModalWindows, closeModalWindows }
}
