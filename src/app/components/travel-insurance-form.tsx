"use client"
import { Formik, Form } from "formik";
import { TravelInsuranceFormValidationSchema, initialValues } from "./form-settings";

import { TravelInsuranceFormFields, TravelInsuranceFormShape } from "./form-settings";
import { FormWithInputContainer } from "../utils/form-with-input-container";
import { serverEndpoint } from "../api/server/route";
import { NextApiClient } from "../api/next-api-client";
import { useState } from "react";

export const TravelInsuranceForm = () => {
  // write a Formik with the imported Formik component

  const [ response, setResponse ] = useState("")

  return (
    <>
    <Formik initialValues={initialValues}
      validationSchema={TravelInsuranceFormValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, formikHelpers) => {
        const res = await fetchServer(values);
        setResponse(res.message);
      }}>
      {(formikProps) => {
        return (
          <Form>
            <div className="flex flex-col gap-2">
              <FormWithInputContainer placeholder="Fødsels-og-personnumer" label="Fødsels-og personnummer" type="text" name={TravelInsuranceFormFields.SocialSecurityNumber} />
              <FormWithInputContainer placeholder="Email addresse" label="Email" type="text" name={TravelInsuranceFormFields.Email} />
              <span className="h-2"/>
              <button onClick={() => formikProps.handleSubmit()} type="submit" className="border-2 bg-white border-black rounded-md hover:opacity-70">Submit</button>
            </div>
          </Form>
        )
      }}
    </Formik>
    {response && <div className="border-2 border-black rounded-md p-2">{response}</div> }
    </>
  );
}
export default TravelInsuranceForm;

interface CResponse {
  message: string;
}

const fetchServer = async (values: TravelInsuranceFormShape): Promise<CResponse> => {

  const res = await new NextApiClient({ endpoint: serverEndpoint }).post(values)
  return res.json()
}
