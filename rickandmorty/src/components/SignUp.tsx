import React from 'react'
import { signUp } from '@/../auth/auth'
import { redirect } from 'next/navigation'

enum ErrorEnum {
  Exists = 'user-already-exists',
}

const errorMap = {
  [ErrorEnum.Exists]: <p>This user already exists</p>,
}

export function SignUp({ error }: { error: string | undefined }) {
  return (
    <div className='flex h-[100vh] w-full flex-col items-center justify-center gap-8'>
      <form
        className='flex w-full flex-col items-center justify-center gap-4'
        action={async (formData) => {
          'use server'
          try {
            await signUp({
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            })
            redirect('/auth/signin')
          } catch (err) {
            const errMessage = err as Error
            if (errMessage.message === 'User already exists') {
              redirect('/auth/signup/user-already-exists')
            }
          }
        }}
      >
        <label>
          Email
          <input name='email' className='m-2 text-black' type='email' />
        </label>
        <label>
          Password
          <input name='password' className='m-2 text-black' type='password' />
        </label>
        {errorMap[error as ErrorEnum]}
        <button className='border-2 p-2 px-20 hover:bg-slate-800'>
          Sign Up
        </button>
      </form>
      <form
        action={async () => {
          'use server'
          redirect('/auth/signin')
        }}
      >
        <button className='border-2 p-2 hover:bg-slate-800'>Sign In</button>
      </form>
    </div>
  )
}
