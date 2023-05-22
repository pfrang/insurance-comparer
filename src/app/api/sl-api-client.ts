export class ServiceLayerApiClient {
  readonly baseUrl: string;
  constructor() {
    this.baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT}/`
   }
}
