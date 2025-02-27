import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormTrigger,
} from "react-hook-form"

export interface FormDataProp<T extends FieldValues> {
  control: Control<T>
  errors: FieldErrors<T>
  trigger: UseFormTrigger<T>
}

export interface FormDataType {
  institution: string
  journeyLevel: string
  fieldOfStudy: string
  gpa: string
  interests: string
}
