
import { NextResponse } from "next/server";
import { Movie } from "./response-schema";

export async function GET(request: Request, { params }: any) {
  const id = params?.id
  const {searchParams } = new URL(request.url)

  return new Response('Hello, Next.js!')
}


export type Response2 = {
  name:string;
  surname: string;
}

export async function POST(request: Request) {
  const data = request?.json()
  const res = await fetchIMDB(request.headers);
  return NextResponse.json(res, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}


const fetchIMDB = async (headers: Headers): Promise<Movie[]>  => {


  const url = 'https://imdb-top-100-movies.p.rapidapi.com/'

  const res = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPID_KEY || "",
      'X-RapidAPI-Host': process.env.X_RAPID_HOST || ""
    }
  });

  return res.json()
}
