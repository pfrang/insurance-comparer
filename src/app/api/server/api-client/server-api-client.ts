import { ServiceLayerApiClient } from "../../sl-api-client";

export abstract class RootServiceLayerApiClient extends ServiceLayerApiClient {

  static baseUrl: string = this.baseUrl

  static async get() {
    const url = this.baseUrl

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async post(body: any) {
    const url = `${this.baseUrl}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
