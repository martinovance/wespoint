import { Box, CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <CircularProgress sx={{ color: "#0256B2" }} />
    </Box>
  )
}

export default Loader
