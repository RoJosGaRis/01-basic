import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts'

export const hashPassword = (password: string): string => {
  const salt = genSaltSync(10)
  return hashSync(password, salt)
}

export const comparePassword = (password: string, hash: string): boolean => {
  return compareSync(password, hash)
}
