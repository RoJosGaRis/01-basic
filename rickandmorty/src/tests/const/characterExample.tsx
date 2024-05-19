import { Character } from '@/components/CharacterCard'

export const example: Character = {
  id: 85,
  name: 'Cyclops Morty',
  status: 'Alive',
  species: 'Humanoid',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/85.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/28',
  ],
  url: 'https://rickandmortyapi.com/api/character/85',
  created: '',
}
