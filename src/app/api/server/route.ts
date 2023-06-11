import { NextResponse } from "next/server";
import { RootServiceLayerApiClient } from "./api-client/server-api-client"

export interface InsurancePricesCRepsonse {
  tryg: string;
  gjensidge: string;
}

export async function GET(request: Request, { params }: any) {
  const response = await RootServiceLayerApiClient.get()
  return new Response('Hello, from GET YYo!')
}

export async function POST(request: Request, { params }: any) {
  const body = await request.json()
  const response: InsurancePricesCRepsonse = await RootServiceLayerApiClient.post(body);

  return new NextResponse(JSON.stringify(response), {
    status: 200, headers: { 'Content-Type': 'application/json' }
  })
}
