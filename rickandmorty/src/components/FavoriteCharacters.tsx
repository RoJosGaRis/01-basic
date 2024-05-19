import React from 'react'
import CharacterCard, { Character } from './CharacterCard'
interface FavoritesCharactersProps {
  characters: Character[]
  favoriteIds: number[]
}

export const FavoriteCharacters = ({
  characters,
  favoriteIds,
}: FavoritesCharactersProps) => {
  return (
    <main className='flex min-h-screen flex-col items-center bg-slate-500 p-12'>
      <div className='flex basis-3/12 flex-wrap'>
        {favoriteIds.length > 0
          ? characters.map(
              (character: Character) =>
                favoriteIds.includes(character.id) && (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    isFavorite={favoriteIds.includes(character.id)}
                  ></CharacterCard>
                ),
            )
          : 'NO FAVORITES'}
        {/* <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard> */}
      </div>
    </main>
  )
}
