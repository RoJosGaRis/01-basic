import { getCurrentFavoriteIds } from '@/functions/characters'
import { getMultipleCharacters } from '@/api/characterRequests'
import { FavoriteCharacters } from '@/components/FavoriteCharacters'

export default async function Home() {
  const favoriteIds = getCurrentFavoriteIds()
  const characters = await getMultipleCharacters(favoriteIds)

  return (
    <FavoriteCharacters characters={characters} favoriteIds={favoriteIds} />
  )
}
