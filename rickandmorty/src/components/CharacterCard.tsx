'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { setFavoriteCharacterAction } from '@/serverActions/characterActions'
// import { useState } from "react";

// {"id":85,"name":"Cyclops Morty","status":"Alive","species":"Humanoid","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/85.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/85","created":"2017-11-30T20:49:52.133Z"}

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: Date
}

const CharacterCard = ({
  character,
  isFavorite,
}: {
  character: Character
  isFavorite: boolean
}) => {
  // const [favoriteValue, setFavoriteValue] = useState(isFavorite);

  // const handleClick = () => {
  //   setFavoriteValue(!favoriteValue);
  //   addFavoriteFunc(character.id);
  // };

  return (
    <div className='m-10 flex h-fit w-[200px] flex-col items-center justify-center rounded-md bg-slate-300 shadow-lg'>
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className='rounded-full p-2 shadow-lg'
      />
      <div className='flex items-center py-5'>
        <Link
          href={`${character.id}`}
          className='p-2 text-center font-bold text-black'
        >
          {character.name}
        </Link>
        <Image
          src={isFavorite ? '/fullStar.svg' : '/emptyStar.svg'}
          alt={character.name}
          width={50}
          height={50}
          className='rounded-full p-2 shadow-lg'
          onClick={() => setFavoriteCharacterAction(character.id)}
        ></Image>
      </div>
      <h4 className='text-center text-black'>
        {character.status} - {character.species}
      </h4>
      <h4 className='p-2 text-center text-black'>
        Location: {character.location.name}
      </h4>
    </div>
  )
}

export default CharacterCard
