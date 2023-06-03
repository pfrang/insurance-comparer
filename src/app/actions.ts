"use server";

import { CResponse, NextApiClient } from "./api/next-api-client";
import { TravelInsuranceFormShape } from "./components/form-settings";

export async function onSubmit(values: TravelInsuranceFormShape): Promise<CResponse> {
  console.log("servers");
  await new Promise(resolve2 => setTimeout(resolve2, 1000))
  const res = new NextApiClient({ endpoint: 'server' }).post(values)
  return res
}
