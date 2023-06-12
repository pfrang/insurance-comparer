import { NextResponse } from "next/server";
import { RootServiceLayerApiClient } from "./api-client/server-api-client"
import { TravelInsuranceFormFields } from "../../components/form-settings";

export interface InsurancePricesCRepsonse {
  tryg: string;
  if: string;
  frende: string;
}

export interface InsurancePricesPayLoad {
  ssn: string;
  email: string;
  forWhom: string;
  deductible: string;
  name: string;
  birthDate: string;
}

export async function GET(request: Request, { params }: any) {
  const response = await RootServiceLayerApiClient.get()
  return new Response('Hello, from GET YYo!')
}

export async function POST(request: Request, { params }: any) {
  const body = await request.json()
  console.log(body);

  const response: InsurancePricesCRepsonse = await RootServiceLayerApiClient.post(body);

  return new NextResponse(JSON.stringify(response), {
    status: 200, headers: { 'Content-Type': 'application/json' }
  })
}
