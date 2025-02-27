import { ModalContextType } from "@/types/contextType"
import { createContext, ReactNode, useMemo, useState } from "react"

// context creation to hold the state and functions for managing modal.
export const ModalContext = createContext<ModalContextType | null>(null)

function ModalContextProvider({ children }: { children: ReactNode }) {
  // Define state to hold all the modal-related data.
  const [state, setState] = useState<ModalContextType["state"]>({
    modalName: "",
    message: "",
    caption: "",
    redirect: "",
    data: {},
    redirectTime: 4000,
  })

  // memoize the context value to prevent  unnecessary re-renders and data change.
  const value = useMemo(() => ({ state, setState }), [state])

  // make value available to all children.
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
