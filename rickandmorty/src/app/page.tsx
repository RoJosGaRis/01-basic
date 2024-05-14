// import Image from "next/image";
import CharacterCard from '../components/CharacterCard'
import { getAllCharacters } from '../api/characterRequests'
import { getCurrentFavoriteIds } from '../functions/characters'
// import { useEffect, useState } from "react";
import { Character } from '../components/CharacterCard'
import { Pagination } from '@/components/Pagination'

interface PageProps {
  params: Record<string, string>
  searchParams: Record<string, string>
}

export default async function Home({ searchParams }: PageProps) {
  const currentPage = searchParams.page ?? '1'
  const {
    results: characters,
    info: { pages },
  } = await getAllCharacters<Character[]>(currentPage)
  const favoriteIds = getCurrentFavoriteIds()
  return (
    <main className='flex min-h-screen flex-col items-center bg-slate-500 p-12'>
      <header>Personajes de Rick And Morty</header>
      <div className='flex basis-3/12 flex-wrap'>
        {characters.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            // addFavoriteFunc={addFavorite}
            isFavorite={favoriteIds.includes(character.id)}
          ></CharacterCard>
        ))}
        {/* <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard> */}
      </div>
      <footer className='flex h-[100px] w-[100vw] items-center justify-center gap-20 bg-slate-400'>
        <Pagination
          currentPage={currentPage}
          lastPage={`${pages}`}
          path='/'
        ></Pagination>
      </footer>
    </main>
  )
}
