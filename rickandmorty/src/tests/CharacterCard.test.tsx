// import assert methods
import { test, expect } from 'vitest'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
// import component
import { example } from './const/characterExample'
import CharacterCard from '@/components/CharacterCard'

// {"id":85,"name":"Cyclops Morty","status":"Alive","species":"Humanoid","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/85.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/85","created":"2017-11-30T20:49:52.133Z"}

// name your test
test('Rendering Name', () => {
  render(<CharacterCard character={example} isFavorite={true} />)
  expect(screen.getByText('Cyclops Morty')).toBeInTheDocument()
})
test('Rendering Location', () => {
  render(<CharacterCard character={example} isFavorite={true} />)
  expect(screen.getByText('Location: Citadel of Ricks')).toBeInTheDocument()
})
