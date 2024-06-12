import * as schema from './schema'
import { eq, and } from 'drizzle-orm'

import { UserInsert, UserSelect } from './schema'

export const getUser = async (
  email: string,
  password: string,
): Promise<UserSelect> => {
  const user = await schema.db
    .select()
    .from(schema.users)
    .where(
      and(eq(schema.users.email, email), eq(schema.users.password, password)),
    )
    .limit(1)

  return user && user[0]
}
export const checkUser = async (email: string): Promise<UserSelect> => {
  const user = await schema.db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1)

  return user && user[0]
}

export const createUser = async (user: UserInsert) => {
  const newUser = await schema.db.insert(schema.users).values({
    email: user.email,
    password: user.password,
  })
  return newUser
}
