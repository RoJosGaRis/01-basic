import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// {"id":85,"name":"Cyclops Morty","status":"Alive","species":"Humanoid","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/85.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/85","created":"2017-11-30T20:49:52.133Z"}

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

const CharacterCard = ({
  character,
  addFavoriteFunc,
  isFavorite,
}: {
  character: Character;
  addFavoriteFunc: (id: number) => void;
  isFavorite: boolean;
}) => {
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);

  const handleClick = () => {
    setFavoriteValue(!favoriteValue);
    addFavoriteFunc(character.id);
  };

  return (
    <div className="h-fit w-[200px] bg-slate-300 m-10 flex flex-col items-center justify-center rounded-md shadow-lg">
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className="rounded-full shadow-lg p-2"
      />
      <div className="flex items-center py-5">
        <Link
          href={`${character.id}`}
          className="text-black font-bold text-center p-2"
        >
          {character.name}
        </Link>
        <Image
          src={favoriteValue ? "/fullStar.svg" : "/emptyStar.svg"}
          alt={character.name}
          width={50}
          height={50}
          className="rounded-full shadow-lg p-2"
          onClick={() => handleClick()}
        ></Image>
      </div>
    </div>
  );
};

export default CharacterCard;
