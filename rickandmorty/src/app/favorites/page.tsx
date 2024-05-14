import CharacterCard from '../../components/CharacterCard'
import { getCurrentFavoriteIds } from '@/functions/characters'
import { getMultipleCharacters } from '@/api/characterRequests'
import { Character } from '../../components/CharacterCard'

export default async function Home() {
  const favoriteIds = getCurrentFavoriteIds()
  const characters = await getMultipleCharacters(favoriteIds)

  return (
    <main className='flex min-h-screen flex-col items-center bg-slate-500 p-12'>
      <div className='flex basis-3/12 flex-wrap'>
        {characters.length > 0
          ? characters.map((character: Character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favoriteIds.includes(character.id)}
              ></CharacterCard>
            ))
          : 'NO FAVORITES'}
        {/* <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard> */}
      </div>
    </main>
  )
}
