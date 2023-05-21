"use client"
import { Formik, Form } from "formik";
import { TravelInsuranceFormValidationSchema, initialValues } from "./form-settings";

import { TravelInsuranceFormFields, TravelInsuranceFormShape } from "./form-settings";
import { FormWithInputContainer } from "../utils/form-with-input-container";
import { serverEndpoint } from "../api/server/route";
import { NextApiClient } from "../api/next-api-client";

export const TravelInsuranceForm = () => {
  // write a Formik with the imported Formik component

  return (
    <Formik initialValues={initialValues}
      validationSchema={TravelInsuranceFormValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, formikHelpers) => {
        const res = await fetchServer(values)
        // console.log("--",res);

      }}>
      {(formikProps) => {
        return (
          <Form>
            <div className="flex flex-col gap-2">
              <FormWithInputContainer placeholder="Fødsels-og-personnumer" label="Fødsels-og personnummer" type="text" name={TravelInsuranceFormFields.SocialSecurityNumber} />
              <FormWithInputContainer placeholder="Email addresse" label="Email" type="text" name={TravelInsuranceFormFields.Email} />
              <span className="h-2"/>
              <button className="border-2 bg-white border-black rounded-md hover:opacity-70" type="submit">Submit</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  );
}
export default TravelInsuranceForm;


const fetchServer = async (values: TravelInsuranceFormShape) => {

  const res = await new NextApiClient({ endpoint: serverEndpoint }).post(values);
  console.log("res", res.text());
}
