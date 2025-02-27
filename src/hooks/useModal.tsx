import { ModalContext } from "@/contexts/modalContext"
import { useContext } from "react"

function useModal() {
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  const { state, setState } = modalContext

  return [state, setState] as const
}

export default useModal
