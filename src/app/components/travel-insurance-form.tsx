"use client"
import { Formik, Form } from "formik";
import { TravelInsuranceFormValidationSchema, initialValues } from "./form-settings";

import { TravelInsuranceFormFields, TravelInsuranceFormShape } from "./form-settings";
import { FormWithInputContainer } from "../utils/form-with-input-container";
import { useState } from "react";
import Loading from "../loading";
import Response from "./response";
import { onSubmit } from "../actions";

interface TravelInsuranceFormprops {
}

export const TravelInsuranceForm = () => {
  // write a Formik with the imported Formik component
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [response, setResponse] = useState("")

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
              setResponse("");
              setLoading(true);
              return await onSubmit(values)
                .then((res) => {
                  setLoading(false);
                  setResponse(res.message);
                })
                .catch((err) => setError(err.message))
                .finally(() => {
                  formikHelpers.setSubmitting(false);
                })
            }}>
            {(formikProps) => {
              return (
                <Form>
                  {error ?
                    <div className="border-2 border-black rounded-md p-2">{error}</div>
                    :
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
                          <button onClick={() => formikProps.handleSubmit()} type="submit" className="border-2 bg-white border-black rounded-md hover:opacity-70">Submit</button>
                        </>
                      )}
                    </div>
                  }
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
