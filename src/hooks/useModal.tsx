import { ModalContext } from "@/contexts/modalContext"
import { useContext } from "react"

function useModal() {
  // Access the modal context using useContext
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    throw new Error("useModal must be used within a ModalProvider")
  }

  // Destructure the state and setState from the modal context
  const { state, setState } = modalContext

  // Return the state and setState as a fixed-length array
  return [state, setState] as const
}

export default useModal
