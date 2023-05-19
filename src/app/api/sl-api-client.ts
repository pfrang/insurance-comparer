export class ServiceLayerApiClient {
  readonly baseUrl: string;
  constructor() {
      this.baseUrl = `http://localhost:${process.env.SERVER_PORT}/`
   }
}
