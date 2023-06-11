"use server";

import { NextApiClient } from "./api/next-api-client";
import { InsurancePricesCRepsonse } from "./api/server/route";
import { TravelInsuranceFormShape } from "./components/form-settings";

export async function onSubmit(values: TravelInsuranceFormShape): Promise<InsurancePricesCRepsonse> {
  console.log("making the request with values", values);
  const res = await new NextApiClient({ endpoint: 'server' }).post(values)
  console.log("response from server", res);
  return res
}
