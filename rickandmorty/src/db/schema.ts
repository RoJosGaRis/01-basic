import { pgTable, serial } from 'drizzle-orm/pg-core'
import { text } from 'drizzle-orm/pg-core'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

const pool = postgres(process.env.CONNECTION_URL || '', { max: 1 })

export const db = drizzle(pool)

export const users = pgTable('logins', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull(),
  password: text('password').notNull(),
})

export const favorites = pgTable('favorites', {
  id: serial('id').primaryKey().notNull(),
  favoriteIds: text('characterId'),
  userId: text('userId')
    .notNull()
    .references(() => users.id),
})

export type UserSelect = typeof users.$inferSelect
export type UserInsert = typeof users.$inferInsert
export type FavoritesSelect = typeof favorites.$inferSelect
export type FavoritesInsert = typeof favorites.$inferInsert
