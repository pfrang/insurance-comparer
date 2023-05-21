import next from "next/types";

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

  constructor(settings?: NextApiClientSettings) {
    this.baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_NEXT_PORT}/api/`
    this.contentType = settings?.contenType || 'application/json'
    this.revalidate = settings?.revalidate || 60
    this.endpoint = settings?.endpoint || ''
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
  async post(body: any) {
    console.log(this.url);

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
    return res
  }
}
