import { NextResponse } from "next/server";
import { Movie } from "./response-schema";

export async function GET(request: Request, { params }: any) {
  return new Response('Hello, from GET YYo!')
}


export type Response2 = {
  name:string;
  surname: string;
}

export async function POST(request: Request) {
  const res = await fetchIMDB();

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }

  return NextResponse.json(res)
}


const fetchIMDB = async (): Promise<Movie[]>  => {


  const url = 'https://imdb-top-100-movies.p.rapidapi.com/'

  const res = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPID_KEY || "",
      'X-RapidAPI-Host': process.env.X_RAPID_HOST || ""
    }
  });

  return res.json()
}
