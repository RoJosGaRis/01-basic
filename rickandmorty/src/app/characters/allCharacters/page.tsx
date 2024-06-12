import { getAllCharacters } from '../../../api/characterRequests'
import { getCurrentFavoriteIds } from '../../../functions/characters'
// import { useEffect, useState } from "react";
import { Character } from '../../../components/CharacterCard'
import { AllCharacters } from '@/components/AllCharacters'
import { checkSession } from '@/serverActions/navigation'
import { redirect } from 'next/navigation'

interface PageProps {
  params: Record<string, string>
  searchParams: Record<string, string>
}

export default async function Home({ searchParams }: PageProps) {
  if (!(await checkSession())) {
    redirect('/auth/signin')
  }

  const currentPage = searchParams.page ?? '1'
  const {
    results: characters,
    info: { pages },
  } = await getAllCharacters<Character[]>(currentPage)
  const favoriteIds = getCurrentFavoriteIds()
  return (
    <AllCharacters
      characters={characters}
      favoriteIds={favoriteIds}
      currentPage={currentPage}
      pages={pages}
    ></AllCharacters>
  )
}
