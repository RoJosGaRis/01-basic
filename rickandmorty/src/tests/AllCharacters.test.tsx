// import assert methods
import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
// import component
import { example } from './const/characterArrayExample'
import { AllCharacters } from '@/components/AllCharacters'

// mock function to make an assert
const mockPush = vi.fn()
// mock library that depends on other functionality
vi.mock('next/navigation', () => {
  return {
    // defined imports used in component
    useRouter: () => ({
      // assign mocked function to function used
      push: mockPush,
    }),
  }
})

// {"id":85,"name":"Cyclops Morty","status":"Alive","species":"Humanoid","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/85.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/85","created":"2017-11-30T20:49:52.133Z"}

// name your test

// interface AllCharactersProps {
//   characters: Character[]
//   favoriteIds: number[]
//   currentPage: string
//   pages: number
// }

test('Rendering Name', () => {
  render(
    <AllCharacters
      characters={example}
      favoriteIds={[1, 2, 3]}
      currentPage='1'
      pages={2}
    />,
  )
  expect(screen.getByText('Personajes de Rick And Morty')).toBeInTheDocument()
})

test('Test Pagination ', async () => {
  render(
    <AllCharacters
      characters={example}
      favoriteIds={[1, 2, 3]}
      currentPage='1'
      pages={2}
    />,
  )

  await userEvent.click(screen.getByText('Next'))
  expect(mockPush).toBeCalledWith('/?page=2')
})

test('Character cards', () => {
  render(
    <AllCharacters
      characters={example}
      favoriteIds={[1, 2, 3]}
      currentPage='1'
      pages={2}
    />,
  )
  expect(screen.getByText('Cyclops Morty 1')).toBeInTheDocument()
  expect(screen.getByText('Cyclops Morty 2')).toBeInTheDocument()
  expect(screen.getByText('Cyclops Morty 3')).toBeInTheDocument()
})
