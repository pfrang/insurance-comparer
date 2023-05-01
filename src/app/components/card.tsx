"use client"
import Image from "next/image";
import { Movie } from "../api/hello/response-schema";

export const Card = ({rank, title, thumbnail, rating, id, year, image, description, trailer, genre, director, writers, imdbid}: Movie) => {

  return (
    <div className="p-2 flex gap-4 border-2 border-black w-full">
    <div>
      <Image width={80} height={80} src={`${thumbnail}`} alt={""}/>
    </div>
    <div>
      <h2>Title: </h2>
      <p>{title}</p>
    </div>
    <div>
      <h2>Rank: </h2>
      <p>{rank}</p>
    </div>
    <div>
      <h2>Release year: </h2>
      <p>{year}</p>
    </div>
    <div>
        <a className="rounded-md border-2 p-2 hover:bg-fuchsia-600" href="https://www.google.com" target="_blank">
          Trykk her
      </a>
    </div>
    </div>
  )
}

export default Card;
