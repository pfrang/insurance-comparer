import { TravelInsuranceFormShape } from "../components/form-settings";
import { InsurancePricesCRepsonse, InsurancePricesPayLoad } from "./server/route";

export interface NextApiClientSettings {
  baseUrl?: string;
  contenType?: string;
  revalidate?: number;
  endpoint: string;
}

export class NextApiClient {
  readonly baseUrl: string;
  readonly url: string;
  readonly contentType: string;
  readonly revalidate: number;
  readonly endpoint: string;

  constructor(settings: NextApiClientSettings) {
    this.baseUrl = `http://localhost:${process.env.NEXT_PORT}/api/`
    this.contentType = settings?.contenType || 'application/json'
    this.revalidate = settings?.revalidate || 0
    this.endpoint = settings.endpoint
    this.url = `${this.baseUrl}${this.endpoint}`
  }

  async get() {

    await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': this.contentType
      },
      next: {
        revalidate: this.revalidate
      }
    })
  }

  //make the function above with POST method
  async post(body: InsurancePricesPayLoad): Promise<InsurancePricesCRepsonse> {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': this.contentType
      },
      body: JSON.stringify(body),
      next: {
        revalidate: this.revalidate
      }
    })

    return res.json()
  }
}
