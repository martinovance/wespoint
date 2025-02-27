export interface ModalContextType {
  state: {
    modalName: string
    message: string
    caption: string
    redirect?: string
    data?: object
    redirectTime?: number
  }
  setState: React.Dispatch<React.SetStateAction<ModalContextType["state"]>>
}
