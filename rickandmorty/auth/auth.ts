import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUser, createUser, checkUser } from '@/db/functions'

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
          console.log(credentials)

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(credentials.password)
          // logic to verify if user exists
          user = await getUser(
            credentials.email as string,
            credentials.password as string,
          )

          if (!user) {
            console.log('user not found')
            // await signUp({
            //   email: credentials.email as string,
            //   password: credentials.password as string,
            // })
            // console.log('user generated')
            user = await checkUser(credentials.email as string)
            if (!user) {
              throw new CustomError('account')
            } else {
              throw new CustomError('credentials')
            }
          }
          console.log('user', user)
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
  const user = await getUser(credentials.email, credentials.password)
  if (user) {
    return user
  }
  return await createUser(credentials)
}
