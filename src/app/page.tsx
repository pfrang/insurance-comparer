"use client"
// import { FC } from "react";
import { Inter } from 'next/font/google'
import { Movie } from './api/hello/response-schema';
import { useState } from 'react';
import FormShell from './components/form-shell';
import { Box, Button, ButtonGroup, Tab, Tabs } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export type Categories = "Reise" | "Innbo" | "Bil"

export default function Home() {
  const categories = ["Reise", "Innbo", "Bil"]
  const [categorySelected, setCategorySelected] = useState<Categories>("Reise");
  // const slicedItems = data?.slice(0,10);¨

  const handleChange = (event: React.SyntheticEvent, newValue: Categories) => {
    setCategorySelected(newValue);
  };

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
        <div>
          <h2>
            Hvilken type forsikring ønsker du å sammenligne?
          </h2>
        </div>
        <span className='h-2 py-2'>
        </span>

        <Tabs
          value={categorySelected}
          onChange={handleChange}
          variant='fullWidth'
          textColor="primary"
          indicatorColor="primary"
          className='w-full border-b-2'
          aria-label="insurance category menu">
          {categories.map((category, idx) => {
            return (
              <Tab className='w-full grow' value={category} label={category} key={`${category}-${idx}`} />
            )
          })}
        </Tabs>
        <FormShell categorySelected={categorySelected} />
      </div >
    </>
  )
}



const fetchYr = async (): Promise<Movie[] | undefined> => {
  const Url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0'
  const res = await fetch(Url, { next: { revalidate: 60 } })
  const waitout = await new Promise(resolve2 => setTimeout(resolve2, 2000))

  const nextBE = 'http://localhost:3000/api/hello'
  const res2 = await fetch(nextBE, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify({ hei: "yo" })
  });


  if (!res.ok || !res2.ok) return undefined;

  return res2.json();
}
