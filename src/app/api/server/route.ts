import { RootServiceLayerApiClient } from "./api-client/server-api-client"

export async function GET(request: Request, { params }: any) {
  const response = await RootServiceLayerApiClient.get()
  return new Response('Hello, from GET YYo!')
}


export async function POST(request: Request, { params }: any) {

  const response = await RootServiceLayerApiClient.post(request.body)
  return new Response('Hello, from GET YYo!')
}
