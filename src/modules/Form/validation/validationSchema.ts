import * as Yup from "yup"

export const validationSchema = Yup.object({
  institution: Yup.string().required("Institution is required"),
  journeyLevel: Yup.string().required("This field is required"),
  fieldOfStudy: Yup.string().required("Field cannot be empty"),
  gpa: Yup.string()
    .required("GPA is required")
    .matches(/^\d{1,3}(\.\d{1,2})?$/, "GPA must be a valid number (e.g., 3.5)"),
  interests: Yup.string().required("Interests are required"),
})
