import { RootServiceLayerApiClient } from "./api-client/server-api-client"

export const serverEndpoint = 'server'

export async function GET(request: Request, { params }: any) {
  const response = await RootServiceLayerApiClient.get()

  console.log("--", response);

  return new Response('Hello, from GET YYo!')
}


export async function POST(request: Request, { params }: any) {
  // const response = await RootServiceLayerApiClient.post(request.body)
  console.log("hfeuwi");

  return new Response('Hello, from POST YYo!')
}
