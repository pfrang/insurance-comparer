import * as Yup from "yup"
import { isValidNorwegianAccountNumber } from "../utils/is-valid-norwegian-account-number";



export enum TravelInsuranceFormFields {
  SocialSecurityNumber = 'ssn',
  Email = 'email',
  Name = 'name',
  ForWhom = 'forWhom',
  Deductible = 'deductible',
  BirthDate = 'birthDate'
}

export type TravelInsuranceFormShape = {
  [TravelInsuranceFormFields.SocialSecurityNumber]: string;
  [TravelInsuranceFormFields.Email]: string;
  [TravelInsuranceFormFields.Name]: string;
  [TravelInsuranceFormFields.BirthDate]: string;
  [TravelInsuranceFormFields.ForWhom]: number;
  [TravelInsuranceFormFields.Deductible]: number;
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
  [TravelInsuranceFormFields.Name]: Yup.string().required("Navn er påkrevd"),
  [TravelInsuranceFormFields.BirthDate]: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
      'Ugyldig datoformat. Forventet format: dd.mm.yyyy'
    )
    .required('Fødselsdato er påkrevd'), [TravelInsuranceFormFields.ForWhom]: Yup.number().required(),
  [TravelInsuranceFormFields.Deductible]: Yup.number().required()
})

export const initialValues: TravelInsuranceFormShape = {
  [TravelInsuranceFormFields.SocialSecurityNumber]: '',
  [TravelInsuranceFormFields.Email]: '',
  [TravelInsuranceFormFields.Name]: '',
  [TravelInsuranceFormFields.BirthDate]: '',
  [TravelInsuranceFormFields.ForWhom]: 1,
  [TravelInsuranceFormFields.Deductible]: 1,
}


export const getValueForWhom = (value: number) => {
  switch (value) {
    case 1:
      return '1 Person'
    case 2:
      return 'Par'
    case 3:
      return 'Familien'
    case 4:
      return 'Hjemmeboende barn over 21 år'
    default:
      return ''
  }
}

export const getValueForDeductible = (value: number) => {
  switch (value) {
    case 1:
      return '1000'
    case 2:
      return '2000'
    case 3:
      return '2500'
    default:
      return ''
  }
}

export const getValueForWhomForForm = () => {
  return [{
    value: 1,
    label: '1 Person'
  }, {
    value: 2,
    label: 'Par'
  }, {
    value: 3,
    label: 'Familien'
  }, {
    value: 4,
    label: 'Hjemmeboende barn over 21 år'
  }]

}


export const getValueForDeductibleForForm = () => {
  return [{
    value: 1,
    label: '1000'
  }, {
    value: 2,
    label: '2000'
  }, {
    value: 3,
    label: '2500'
  }]
}
