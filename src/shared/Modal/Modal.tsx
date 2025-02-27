import React, { ReactNode } from "react"
import { Modal as CModal } from "@mui/material"
import Box from "@mui/material/Box"

import useModal from "@/hooks/useModal"

interface ModalProps {
  children: ReactNode
  modalName: string
}

function Modal({ children, modalName, ...others }: ModalProps) {
  const [state] = useModal()

  return (
    <CModal open={state.modalName === modalName} disableAutoFocus {...others}>
      <Box
        sx={{
          position: "absolute",
          background: "white",
          color: "black",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          borderRadius: "8px",
          minWidth: { xs: "90%", sm: "30%" },
          placeItems: "center",
          "& .MuiBox-root": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <Box sx={{ pb: 0, px: 0 }}>{children}</Box>
      </Box>
    </CModal>
  )
}

export default Modal
