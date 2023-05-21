import * as Yup from "yup"
import { isValidNorwegianAccountNumber } from "../utils/is-valid-norwegian-account-number";


export enum TravelInsuranceFormFields {
  SocialSecurityNumber = 'ssn',
  Email = 'email',
}


export type TravelInsuranceFormShape = {
  [TravelInsuranceFormFields.SocialSecurityNumber]: string;
  [TravelInsuranceFormFields.Email]: string;
}

export const TravelInsuranceFormValidationSchema = Yup.object({
  [TravelInsuranceFormFields.SocialSecurityNumber]: Yup.string()
    .test(
      "Gyldig kontonummer",
      "Ugyldog norsk kontonummer",
      (value) => isValidNorwegianAccountNumber(String(value))
    )
    .required("Kontonummer er påkrevd"),
  [TravelInsuranceFormFields.Email]: Yup.string().email('Ugyldig e-postaddresse').required(
    `Email er påkrevd`
    ),
})

export const initialValues: TravelInsuranceFormShape = {
  [TravelInsuranceFormFields.SocialSecurityNumber]: '',
  [TravelInsuranceFormFields.Email]: '',
}
