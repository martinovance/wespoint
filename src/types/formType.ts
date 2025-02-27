import { Control, FieldValues } from "react-hook-form"

export interface FormDataProp<T extends FieldValues> {
  control: Control<T>
}

export interface FormDataType {
  institution: string
  journeyLevel: string
  fieldOfStudy: string
  gpa: string
  interests: string
}
