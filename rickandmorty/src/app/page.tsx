import React from 'react'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/characters/allCharacters')
  return <div>Redirecting...</div>
}
