import { FormDataProp, FormDataType } from "@/types/formType"
import { Grid, InputLabel, MenuItem, TextField } from "@mui/material"
import { Controller } from "react-hook-form"

function Form1({ control, errors, trigger }: FormDataProp<FormDataType>) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        "& .MuiInputBase-root": {
          height: 38,
          display: "flex",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          fontWeight: "600",
          color: "#111111",
        },
        "& .MuiFormLabel-asterisk": {
          color: "#E31B23",
        },
      }}
    >
      <Grid item xs={12}>
        <InputLabel required>Name of institution</InputLabel>
        <Controller
          name="institution"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              select
              error={!!errors.institution}
              helperText={errors.institution?.message}
              onChange={(e) => {
                field.onChange(e)
                trigger("institution")
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value: unknown) => {
                  if (typeof value !== "string" || value === "") {
                    return <span style={{ color: "#7F8184" }}>WESOnline</span>
                  }
                  return value
                },
              }}
            >
              <MenuItem value="WESOnline">WESOnline</MenuItem>
              <MenuItem value="Udemy">Udemy</MenuItem>
              <MenuItem value="Coursera">Coursera</MenuItem>
              <MenuItem value="Pluralsight">Pluralsight</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel required>Where are you on your journey?</InputLabel>
        <Controller
          name="journeyLevel"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="100"
              error={!!errors.journeyLevel}
              helperText={errors.journeyLevel?.message}
              onChange={(e) => {
                field.onChange(e)
                trigger("journeyLevel")
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={6}>
        <InputLabel required>Field of study</InputLabel>
        <Controller
          name="fieldOfStudy"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="Chemistry"
              error={!!errors.fieldOfStudy}
              helperText={errors.fieldOfStudy?.message}
              onChange={(e) => {
                field.onChange(e)
                trigger("fieldOfStudy")
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={6}>
        <InputLabel required>GPA</InputLabel>
        <Controller
          name="gpa"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="_ _ _ _ _ _"
              error={!!errors.gpa}
              helperText={errors.gpa?.message}
              onChange={(e) => {
                field.onChange(e)
                trigger("gpa")
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel required>What areas interest you most?</InputLabel>
        <Controller
          name="interests"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              select
              error={!!errors.interests}
              helperText={errors.interests?.message}
              onChange={(e) => {
                field.onChange(e)
                trigger("interests")
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value: unknown) => {
                  if (typeof value !== "string" || value === "") {
                    return (
                      <span style={{ color: "#7F8184" }}>
                        Business & Management
                      </span>
                    )
                  }
                  return value
                },
              }}
            >
              <MenuItem value="Business & Management">
                Business & Management
              </MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
            </TextField>
          )}
        />
      </Grid>
    </Grid>
  )
}

export default Form1
