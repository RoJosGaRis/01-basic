import React from 'react'
import CharacterCard, { Character } from './CharacterCard'
import { Pagination } from './Pagination'

interface AllCharactersProps {
  characters: Character[]
  favoriteIds: number[]
  currentPage: string
  pages: number
}

export const AllCharacters = ({
  characters,
  favoriteIds,
  currentPage,
  pages,
}: AllCharactersProps) => {
  return (
    <div>
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
    </div>
  )
}
