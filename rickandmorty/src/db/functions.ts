import * as schema from './schema'
import { eq, and } from 'drizzle-orm'
import { hashPassword } from '@/functions/crypto'

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
export const getUserPassword = async (email: string): Promise<UserSelect> => {
  const user = await schema.db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1)

  return user && user[0]
}

export const getUserId = async (email: string): Promise<UserSelect> => {
  const user = await schema.db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1)

  return user && user[0]
}

export const updateFavorites = async (userId: string, newFavorites: string) => {
  const updated = await schema.db
    .update(schema.favorites)
    .set({ favoriteIds: newFavorites })
    .where(eq(schema.favorites.userId, userId))
    .returning({ favorites: schema.favorites.favoriteIds })

  return updated && updated[0]
}

export const getFavorites = async (userId: string) => {
  const favorites = await schema.db
    .select()
    .from(schema.favorites)
    .where(eq(schema.favorites.userId, userId))
    .limit(1)

  return favorites && favorites[0]
}

export const createFavorites = async (userId: string) => {
  const newFavorites = await schema.db.insert(schema.favorites).values({
    userId,
    favoriteIds: '',
  })
  return newFavorites && newFavorites[0]
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
    password: hashPassword(user.password),
  })
  return newUser
}
