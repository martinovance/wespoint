import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material"
import { useState } from "react"
import Form1 from "./components/Form1"

import { ReactComponent as Gift } from "@/assets/gift.svg"
import { useForm } from "react-hook-form"
import useModal from "@/hooks/useModal"
import SuccessModal from "./modal/SuccessModal"
import { FormDataType } from "@/types/formType"

const DashSteps = ["", "", "", ""]

const CustomStepIcon = styled("div")<{ active?: boolean }>(({ active }) => ({
  minWidth: "100px",
  height: "4px",
  backgroundColor: active ? "#0256B2" : "#E6EEF7",
  borderRadius: "8px",
  "@media (max-width: 515px)": {
    minWidth: "70px",
  },
  "@media (max-width: 480px)": {
    minWidth: "50px",
  },
  "@media (max-width: 310px)": {
    minWidth: "40px",
  },
}))

const Registration = () => {
  const [activeStep, setActiveStep] = useState(0)
  const { control, handleSubmit, reset } = useForm<FormDataType>()
  const [modal, setModal] = useModal()

  const handleNext = () => {
    if (activeStep < DashSteps.length - 1) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1)
    }
  }

  const handleSkip = () => {
    handleNext() // Just moves to the next step
  }

  const onSubmit = () => {
    // console.log("Form Data Submitted:", data)
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "successModal",
      message: "Congratulations",
      caption: "You've earned 1000 WESPoint",
    }))
    reset()
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", sm: "center" },
        height: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: { xs: "100%", sm: "500px" },
          minHeight: "400px",
          padding: 2,
          gap: 3,
        }}
      >
        <Grid item xs={12}>
          <Stepper activeStep={activeStep}>
            {DashSteps.map((_, index) => (
              <Step key={`dash-step-${index}`}>
                <StepLabel
                  StepIconComponent={() => (
                    <CustomStepIcon active={index === activeStep} />
                  )}
                />
              </Step>
            ))}
          </Stepper>
        </Grid>

        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            {(activeStep === 0 && "Education🎓") ||
              (activeStep === 1 && "Form 2🎓") ||
              (activeStep === 2 && "Form 3🎓") ||
              (activeStep === 3 && "Form 4🎓")}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
            Tell Us about your academic background
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "600", color: "#0256B2" }}
          >
            800 WESPoint remaining to unlock ESA
          </Typography>
        </Box>

        <Chip
          icon={<Gift />}
          label="Your Reward for this step is 200 WESPoints"
          sx={{
            color: "#0256B2",
            fontSize: "16px",
            fontWeight: "700",
            padding: { xs: "24px 12px", sm: "24px" },
            bgcolor: "#E6EEF7",
            borderRadius: "4px",
            justifyContent: "flex-start",
            alignItems: { xs: "flex-start", sm: "center" },
            width: "100%",
            height: { xs: "auto", sm: 0 },
            whiteSpace: "normal",
            "& .MuiChip-label": {
              whiteSpace: "normal", // Ensure the label text wraps
              display: "inline-block", // Allow the label to take up multiple lines
              textAlign: "left", // Align text to the left
            },
          }}
        />

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          {activeStep === 0 && <Form1 control={control} />}
        </form>

        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          sx={{ mt: "auto", pt: 6 }}
        >
          <Button
            onClick={handleSkip}
            disabled={activeStep === 3}
            sx={{
              textTransform: "capitalize",
              color: "#000",
            }}
          >
            Skip for now
          </Button>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handlePrev}
              disabled={activeStep === 0}
              sx={{
                bgcolor: "#E6EEF7",
                color: "#0256B2",
                textTransform: "capitalize",
              }}
            >
              Prev
            </Button>
            {activeStep === 3 ? (
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                sx={{
                  bgcolor: "#0256B2",
                  color: "#E6EEF7",
                  textTransform: "capitalize",
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  bgcolor: "#0256B2",
                  color: "#E6EEF7",
                  textTransform: "capitalize",
                }}
              >
                Continue
              </Button>
            )}
          </Stack>
        </Stack>
      </Card>

      <SuccessModal setActiveStep={setActiveStep} />
    </Box>
  )
}

export default Registration
