import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SignOutButton } from '@/components/SignOutButton'
// import 'rickandmorty/src/app/globals.css'
import Link from 'next/link'
import { checkSession } from '@/serverActions/navigation'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!(await checkSession())) {
    redirect('/auth/signin')
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='sticky top-0 flex h-[10vh] w-[100vw] items-center gap-20 bg-blue-100  pl-20'>
          <Link
            className='rounded-lg bg-slate-400 p-5'
            href={'/characters/allCharacters'}
          >
            All Characters
          </Link>
          <Link
            className='rounded-lg bg-slate-400 p-5'
            href={'/characters/favorites'}
          >
            Favorites
          </Link>
          <SignOutButton />
        </header>
        {children}
      </body>
    </html>
  )
}
