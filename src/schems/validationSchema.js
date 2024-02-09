import * as yup from "yup";
const regPhone = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;

export const validationSchema = yup.object().shape({
  customer: yup
    .string()
    .required("*Name is required")
    .max(14, "Name must be 14 characters or less"),
  phone: yup
    .string()
    .matches(
      regPhone,
      "Phone number is not valid. Add +380 to the beginning and try again",
    )
    .required("*Phone number required"),
  address: yup.string().required("*Address is required"),
  priority: yup.boolean(),
});