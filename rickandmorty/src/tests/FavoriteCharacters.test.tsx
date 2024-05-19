// import assert methods
import { test, expect, vi } from 'vitest'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
// import component
import { example } from './const/characterArrayExample'
import { FavoriteCharacters } from '@/components/FavoriteCharacters'

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

test('Rendering only one', () => {
  render(<FavoriteCharacters characters={example} favoriteIds={[1]} />)
  expect(screen.getByText('Cyclops Morty 1')).toBeInTheDocument()
  expect(() => screen.getByText('Cyclops Morty 2')).toThrow()
  expect(() => screen.getByText('Cyclops Morty 3')).toThrow()
})

test('Rendering two ', async () => {
  render(<FavoriteCharacters characters={example} favoriteIds={[2, 3]} />)

  expect(() => screen.getByText('Cyclops Morty 1')).toThrow()
  expect(screen.getByText('Cyclops Morty 2')).toBeInTheDocument()
  expect(screen.getByText('Cyclops Morty 3')).toBeInTheDocument()
})
test('Rendering none ', async () => {
  render(<FavoriteCharacters characters={example} favoriteIds={[]} />)

  expect(() => screen.getByText('Cyclops Morty 1')).toThrow()
  expect(() => screen.getByText('Cyclops Morty 2')).toThrow()
  expect(() => screen.getByText('Cyclops Morty 3')).toThrow()
  expect(screen.getByText('NO FAVORITES')).toBeInTheDocument()
})
