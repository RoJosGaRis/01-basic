import React from 'react'
import { signIn } from '@/../auth/auth'
import { redirect } from 'next/navigation'
import { auth } from '@/../auth/auth'

enum Error {
  Credentials = 'credentials',
}

const errorMap = {
  [Error.Credentials]: (
    <p>
      Your input contains invalid credentials. Check your email or password:{' '}
    </p>
  ),
}

export async function SignIn({ error }: { error: string | undefined }) {
  console.log('AAAAAAAA', error)
  const session = await auth()
  if (session) {
    redirect('/characters/allCharacters')
  }
  return (
    <form
      action={async (formData) => {
        'use server'
        try {
          await signIn('credentials', formData)
        } catch (error) {
          redirect('/auth/signin/credentials')
        }
      }}
    >
      <label>
        Email
        <input name='email' type='email' />
      </label>
      <label>
        Password
        <input name='password' type='password' />
      </label>
      <button>Sign In</button>
      {errorMap[error as Error]}
    </form>
  )
}
