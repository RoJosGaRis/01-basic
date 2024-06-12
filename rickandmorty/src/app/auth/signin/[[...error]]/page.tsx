import { SignIn } from '@/components/SignIn'
import { checkSession } from '@/serverActions/navigation'
import { redirect } from 'next/navigation'
export default async function Home({
  params,
}: {
  params: { error: string } | undefined
}) {
  if (await checkSession()) redirect('/characters/allCharacters')

  return <SignIn error={params?.error} />
}
