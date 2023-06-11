import { ServiceLayerApiClient } from "../../sl-api-client";

export abstract class RootServiceLayerApiClient extends ServiceLayerApiClient {
  // readonly baseUrl: string;

  // constructor() {
  //     super();
  //     this.baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT}/`
  // }

  // Inherited baseUrl from ServiceLayerApiClient

  static async get() {

    const url = `http://localhost:${process.env.SERVER_PORT}/`
    console.log("url", url);

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
    const url = `http://localhost:${process.env.SERVER_PORT}/`
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json()
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
