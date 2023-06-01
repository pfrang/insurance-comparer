"use client"
// import { FC } from "react";
import { Inter } from 'next/font/google'
import Card from './components/card';
import { Movie } from './api/hello/response-schema';
import { CResponse, NextApiClient } from './api/next-api-client';
import { serverEndpoint } from './api/server/api-client/server-api-client';
import { TravelInsuranceFormShape } from './components/form-settings';
import { useState } from 'react';
import FormShell from './components/form-shell';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const categories = ["Reise", "Innbo", "Bil"]
  const [categorySelected, setCategorySelected] = useState<number>(0);
  // const slicedItems = data?.slice(0,10);¨
  return (
    <>
      <div className='h-10 py-10'>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center w-full'>
        {/* {slicedItems && slicedItems.map((movie,idx) => {
          return (
            <Card key={`${movie.id}-${idx}`} {...movie} />
            )
          })} */}
        <div className='grid grid-cols-3 justify-between w-full border-b-2  border-black'>
          {categories.map((category, idx) => {
            return (
              <button key={`${category}-${idx}`} onClick={() => setCategorySelected(idx)} className={`skew-x-2 hover:opacity-70 ${idx === categorySelected && 'bg-red-600'}`}>{category}</button>
            )
          })}
        </div>
        <FormShell categorySelected={categorySelected} onSubmit={onSubmit} />
      </div>
    </>
  )
}

const onSubmit = async (values: TravelInsuranceFormShape): Promise<CResponse> => {
  const res = await new NextApiClient({ endpoint: serverEndpoint }).post(values)
  return res.json()
}

const fetchYr = async (): Promise<Movie[] | undefined> => {
  const Url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0'
  const res = await fetch(Url, {next: { revalidate: 60}})
  const waitout = await new Promise(resolve2 => setTimeout(resolve2, 2000))

  const nextBE = 'http://localhost:3000/api/hello'
  const res2 = await fetch(nextBE, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify({hei: "yo"})
  });


  if(!res.ok || !res2.ok) return undefined;

  return res2.json();
}
