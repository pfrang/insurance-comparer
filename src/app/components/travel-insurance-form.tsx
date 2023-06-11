"use client"
import { Formik, Form } from "formik";
import { TravelInsuranceFormValidationSchema, initialValues } from "./form-settings";

import { TravelInsuranceFormFields, TravelInsuranceFormShape } from "./form-settings";
import { FormWithInputContainer } from "../utils/form-with-input-container";
import { useState } from "react";
import Loading from "../loading";
import Response from "./response";
import { onSubmit } from "../actions";
import { Button } from "@mui/material";
import { InsurancePricesCRepsonse } from "../api/server/route";


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
              setResponse(undefined);
              setLoading(true);
              return await onSubmit(values)
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
                        <span className="h-2" />
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
