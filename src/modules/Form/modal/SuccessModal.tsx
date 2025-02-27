import useModal from "@/hooks/useModal"
import Modal from "@/shared/Modal/Modal"
import { Box, Button, Typography } from "@mui/material"

import { ReactComponent as WowSticker } from "@/assets/WowSticker.svg"
import { ReactComponent as Gift } from "@/assets/Gift.svg"

function SuccessModal({
  setActiveStep,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}) {
  const [state, setState] = useModal()

  const handleNavigate = () => {
    setActiveStep(0) // resets activeStep to the first page

    setState({ ...state, modalName: "" }) // updating modal state to close modal
  }

  return (
    <Modal modalName="successModal">
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          maxWidth: { xs: "100%", sm: "350px" },
          height: "100%",
          padding: "24px",
          placeItems: "center",
          "& .MuiTypography-subtitle1": {
            paddingTop: "1rem",
            color: "#6B6C7E",
          },
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WowSticker />
        </Box>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "800", pt: 1, color: "#5EC26A" }}
        >
          {state.message}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "600", pt: 1, color: "#666666" }}
        >
          {state.caption}
        </Typography>
        <Box
          sx={{
            mt: 3,
            maxWidth: "100%",
            minHeight: "200px",
            bgcolor: "#E6EEF7",
            border: "4px solid blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
            gap: 2,
            borderRadius: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Gift />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "800",
                color: "#0256B2",
              }}
            >
              Your Rewards
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#0256B2",
              }}
            >
              2000 WESPoint Unlocked
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#0256B2",
              }}
            >
              Want to know your employability status? Take the ESA with your
              2000 WESPoints to get started!
            </Typography>
            <Button
              onClick={handleNavigate}
              fullWidth
              sx={{
                borderRadius: "8px",
                backgroundColor: "#0256B2",
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              Take ESA
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default SuccessModal
