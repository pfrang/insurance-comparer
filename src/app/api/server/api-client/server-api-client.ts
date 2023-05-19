import { ServiceLayerApiClient } from "../../sl-api-client";

export class RootServiceLayerApiClient extends ServiceLayerApiClient {
  get() {
    return this.httpClient.then((res) => res.json())
  }
}
