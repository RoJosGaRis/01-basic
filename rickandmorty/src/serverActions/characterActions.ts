'use server'

import { FAVORITE_CHARACTER_KEY } from '@/const/cookies'
import { getCurrentFavoriteIds } from '@/functions/characters'
import { setCookie } from '@/functions/cookies'

export async function setFavoriteCharacterAction(
  characterId: number,
): Promise<void> {
  const favoriteIds = getCurrentFavoriteIds()
  let newFavorites: number[] = []
  if (favoriteIds.includes(characterId))
    newFavorites = favoriteIds.filter((id) => id !== characterId)
  else newFavorites = [...favoriteIds, characterId]
  setCookie(FAVORITE_CHARACTER_KEY, newFavorites.join(','))
}
