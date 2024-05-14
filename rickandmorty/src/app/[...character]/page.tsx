import Image from 'next/image'
import { getCharacter } from '../../api/characterRequests'

export default async function Home() {
  const characterInfo = await getCharacter(1)
  return (
    <div className='flex w-full items-center justify-center'>
      {characterInfo && (
        <div className='flex h-[100%] min-h-[100vh] w-6/12 flex-col items-center justify-start bg-slate-100'>
          <div className='m-10 flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-slate-300 shadow-lg'>
            <Image
              src={characterInfo.image}
              alt={characterInfo.name}
              width={300}
              height={300}
              className='rounded-full'
            />
          </div>
          <h1 className='text-black'>
            <strong>Name:</strong> {characterInfo.name}
          </h1>
          <h1 className='text-black'>
            <strong>Status:</strong> {characterInfo.status}
          </h1>
          <h1 className='text-black'>
            <strong>Gender:</strong> {characterInfo.gender}
          </h1>
          <h1 className='text-black'>
            <strong>Origin:</strong> {characterInfo.origin.name}
          </h1>
          <h1 className='text-black'>
            <strong>Location:</strong> {characterInfo.location.name}
          </h1>
          <h1 className='text-black'>
            <strong>Episodes:</strong>
          </h1>
          <div className='flex flex-wrap gap-2 px-20 py-2'>
            {characterInfo.episode.map((episode, index) => (
              <h2
                key={index}
                className='w-[25px] rounded-full bg-green-200 text-center text-black'
              >
                {episode.split('https://rickandmortyapi.com/api/episode/')[1]}
              </h2>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
