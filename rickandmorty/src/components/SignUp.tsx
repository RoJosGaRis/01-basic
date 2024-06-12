import React from 'react'
import { signUp } from '@/../auth/auth'
import { redirect } from 'next/navigation'

export function SignUp() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signUp({
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        })
        redirect('/auth/signin')
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
    </form>
  )
}
