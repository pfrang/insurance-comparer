"use client"
import { Formik, Form, FormikProps } from "formik";
import { TravelInsuranceFormValidationSchema, getValueForDeductible, getValueForDeductibleForForm, getValueForWhom, getValueForWhomForForm, initialValues } from "./form-settings";

import { TravelInsuranceFormFields, TravelInsuranceFormShape } from "./form-settings";
import { FormWithInputContainer } from "../utils/form-with-input-container";
import { useState } from "react";
import Loading from "../loading";
import Response from "./response";
import { onSubmit } from "../actions";
import { Button, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { InsurancePricesCRepsonse } from "../api/server/route";
import React from "react";
import { SelectComp } from "../utils/select";


interface TravelInsuranceFormprops {
  setError: (value: boolean) => void;
}

export const TravelInsuranceForm = ({ setError }: TravelInsuranceFormprops) => {
  // write a Formik with the imported Formik component
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState<undefined | InsurancePricesCRepsonse>(undefined)

  return (
    <>
      {response
        ?
        <Response response={response} setResponse={setResponse} />
        :
        <>
          <Formik initialValues={initialValues}
            validationSchema={TravelInsuranceFormValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values, formikHelpers) => {
              const values2 = {
                ...values,
                forWhom: getValueForWhom(values[TravelInsuranceFormFields.ForWhom]),
                deductible: getValueForDeductible(values[TravelInsuranceFormFields.Deductible])
              }

              console.log(values2);

              return
              setResponse(undefined);
              setLoading(true);
              return await onSubmit(values2)
                .then((res) => {
                  setLoading(false);
                  setResponse(res);
                })
                .catch((err) => {
                  setError(true);
                  console.error(err.message);
                })
                .finally(() => {
                  formikHelpers.setSubmitting(false);
                })
            }}>
            {(formikProps) => {
              return (
                <Form>
                  <div className="flex flex-col gap-2">
                    {loading && (
                      <div className="h-28 flex justify-center items-center">
                        <Loading />
                      </div>
                    )}
                    {!loading && (
                      <>
                        <FormWithInputContainer placeholder="Fødsels-og-personnumer" label="Fødsels-og personnummer" type="text" name={TravelInsuranceFormFields.SocialSecurityNumber} />
                        <FormWithInputContainer
                          placeholder="Email addresse"
                          label="Email"
                          type="text"
                          name={TravelInsuranceFormFields.Email}
                        />

                        <FormWithInputContainer
                          placeholder="Skriv inn fullt navn her"
                          label="Fult navn"
                          type="text"
                          name={TravelInsuranceFormFields.Name} />

                        <span className="h-2" />
                        <FormWithInputContainer
                          placeholder="Skriv inn din fødselsdato her"
                          label="Fødselsdato"
                          type="text"
                          name={TravelInsuranceFormFields.BirthDate}
                        />
                        <span className="h-2" />
                        <SelectComp name={TravelInsuranceFormFields.ForWhom}
                          value={formikProps.values[TravelInsuranceFormFields.ForWhom]}
                          formikProps={formikProps}
                          label="Hvem skal forsikringen gjelde for"
                          placeholder="Velg"
                          items={getValueForWhomForForm()}

                        />

                        <span className="h-2" />
                        <SelectComp name={TravelInsuranceFormFields.Deductible}
                          value={formikProps.values[TravelInsuranceFormFields.Deductible]}
                          formikProps={formikProps}
                          label="Hvilken egenandel ønsker du?"
                          placeholder="Velg"
                          items={getValueForDeductibleForForm()}
                        />


                        <Button onClick={() => formikProps.handleSubmit()} type="submit" className="border-2 bg-white border-black rounded-md hover:opacity-70">Submit</Button>
                      </>
                    )}
                  </div>
                </Form>
              )
            }}
          </Formik>
        </>
      }
    </>
  );
}

export default TravelInsuranceForm;
