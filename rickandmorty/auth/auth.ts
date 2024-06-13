import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { comparePassword, hashPassword } from '@/functions/crypto'
import {
  createUser,
  checkUser,
  getFavorites,
  createFavorites,
  getUserPassword,
} from '@/db/functions'
import { setCookie } from '@/functions/cookies'
import { FAVORITE_CHARACTER_KEY } from '@/const/cookies'

interface User {
  id: string
  email: string
  password: string
}

class CustomError extends CredentialsSignin {
  code = 'custom_error'
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (
        credentials: Partial<Record<'email' | 'password', unknown>>,
      ): Promise<User | null> => {
        try {
          let user: User | null = null

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(credentials.password)
          // logic to verify if user exists
          user = await getUserPassword(credentials.email as string)

          if (
            !user ||
            !comparePassword(credentials.password as string, user.password)
          ) {
            user = await checkUser(credentials.email as string)
            if (!user) {
              throw new CustomError('account')
            } else {
              throw new CustomError('credentials')
            }
          }
          let favorites = await getFavorites(user.id)
          if (!favorites) {
            favorites = await createFavorites(user.id)
          }
          setCookie(FAVORITE_CHARACTER_KEY, favorites.favoriteIds || '')
          // return user object with the their profile data
          return user
        } catch {
          return null
        }
      },
    }),
  ],
})

export const signUp = async (credentials: {
  email: string
  password: string
}) => {
  const user = await getUserPassword(credentials.email)
  if (user) {
    if (comparePassword(hashPassword(credentials.password), user.password)) {
      return user
    } else {
      throw new Error('User already exists')
    }
  }
  return await createUser(credentials)
}
