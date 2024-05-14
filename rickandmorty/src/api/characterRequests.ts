import { Character } from '../components/CharacterCard'
import { Result } from '../types'

export async function getCharacter(id: number): Promise<Character> {
  const response = await fetch(
    new URL(`/api/character/${id}`, 'https://rickandmortyapi.com'),
  )
  const character: Character = await response.json()
  return character
}

export async function getAllCharacters<T>(page: string): Promise<Result<T>> {
  const response = await fetch(
    new URL(
      `/api/character/${page === '1' ? '' : `?page=${page}`}`,
      'https://rickandmortyapi.com',
    ),
  )
  const result: Result<T> = await response.json()
  return result
}

export async function getMultipleCharacters(
  ids: number[],
): Promise<Character[]> {
  if (!ids) return []
  const response = await fetch(
    new URL(`/api/character/${ids.join(',')}`, 'https://rickandmortyapi.com'),
  )
  if (ids.length === 1) {
    const singleCharacter: Character = await response.json()
    return singleCharacter ? [singleCharacter] : []
  }
  const result: Character[] = await response.json()
  return result ?? []
}
