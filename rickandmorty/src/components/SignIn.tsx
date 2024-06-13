import React from 'react'
import { signIn } from '@/../auth/auth'
import { redirect } from 'next/navigation'
import { auth } from '@/../auth/auth'

enum Error {
  Credentials = 'credentials',
}

const errorMap = {
  [Error.Credentials]: (
    <p>Your input contains invalid credentials. Check your email or password</p>
  ),
}

export async function SignIn({ error }: { error: string | undefined }) {
  const session = await auth()
  if (session) {
    redirect('/characters/allCharacters')
  }
  return (
    <div className='flex h-[100vh] w-full flex-col items-center justify-center gap-8'>
      <form
        className='flex w-full flex-col items-center justify-center gap-4'
        action={async (formData) => {
          'use server'
          try {
            await signIn('credentials', formData)
            redirect('/characters/allCharacters')
          } catch (err) {
            redirect('/auth/signin/credentials')
          }
        }}
      >
        <label className='p-2'>
          Email
          <input name='email' type='email' className='m-2 text-black' />
        </label>
        <label>
          Password
          <input name='password' type='password' className='m-2 text-black' />
        </label>
        <button className='border-2 p-2 px-20 hover:bg-slate-800'>
          Sign In
        </button>
        {errorMap[error as Error]}
      </form>
      <form
        action={async () => {
          'use server'
          redirect('/auth/signup')
        }}
      >
        <button className='border-2 p-2 hover:bg-slate-800'>Sign Up</button>
      </form>
    </div>
  )
}
