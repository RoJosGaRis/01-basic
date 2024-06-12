import React from 'react'
import { signOut } from '@/../auth/auth'

export const SignOutButton = async () => {
  return (
    <form
      action={async () => {
        'use server'
        console.log('SI')
        await signOut()
      }}
    >
      <button className='right-0 justify-self-end rounded-lg bg-slate-400 p-5'>
        Sign Out
      </button>
    </form>
  )
}
