import axios from 'axios'

export class ServiceLayerApiClient {
  private readonly baseUrl: string;
  httpClient: Promise<any>;
  constructor() {
      this.baseUrl = `http://localhost:${process.env.SERVER_PORT}/`
      this.httpClient = fetch(this.baseUrl)
   }
}
