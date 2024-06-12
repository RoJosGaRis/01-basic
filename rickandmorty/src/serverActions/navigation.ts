'use server'

import { redirect } from 'next/navigation'
import { auth } from '../../auth/auth'

export const checkSession = async () => {
  const session = await auth()
  if (!session) return false
  return true
}
export const navigate = async (path: string) => {
  redirect(path)
}
