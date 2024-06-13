import { SignUp } from '@/components/SignUp'
export default async function Home({
  params,
}: {
  params: { error: string } | undefined
}) {
  return <SignUp error={params?.error} />
}
