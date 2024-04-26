"use client";
import CharacterCard from "../components/CharacterCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Character } from "../components/CharacterCard";

// async function getData() {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     });
// }

export default function Home({ params }: { params: { character: string } }) {
  const [characterInfo, setCharacterInfo] = useState<Character>();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.character}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacterInfo(data);
        console.log(params.character);
      });
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      {characterInfo && (
        <div className="w-6/12 h-[100%] min-h-[100vh] bg-slate-100 flex justify-start items-center flex-col">
          <div className="h-[200px] w-[200px] bg-slate-300 m-10 flex flex-col items-center justify-center rounded-full shadow-lg">
            <Image
              src={characterInfo.image}
              alt={characterInfo.name}
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <h1 className="text-black">
            <strong>Name:</strong> {characterInfo.name}
          </h1>
          <h1 className="text-black">
            <strong>Status:</strong> {characterInfo.status}
          </h1>
          <h1 className="text-black">
            <strong>Gender:</strong> {characterInfo.gender}
          </h1>
          <h1 className="text-black">
            <strong>Origin:</strong> {characterInfo.origin.name}
          </h1>
          <h1 className="text-black">
            <strong>Location:</strong> {characterInfo.location.name}
          </h1>
          <h1 className="text-black">
            <strong>Episodes:</strong>
          </h1>
          <div className="flex gap-2 flex-wrap px-20 py-2">
            {characterInfo.episode.map((episode) => (
              <h2 className="text-black bg-green-200 w-[25px] rounded-full text-center">
                {episode.split("https://rickandmortyapi.com/api/episode/")[1]}
              </h2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
