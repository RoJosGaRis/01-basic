'use client'
import { useRouter } from 'next/navigation'

export interface PaginationProps {
  currentPage: string
  lastPage: string
  path: string
}

export function Pagination({ currentPage, lastPage, path }: PaginationProps) {
  const router = useRouter()
  const onPrev = () => {
    const pageNumber = Number(currentPage)
    router.push(`${path}?page=${pageNumber - 1}`)
  }
  const onNext = () => {
    const pageNumber = Number(currentPage)
    if (pageNumber > 0) router.push(`${path}?page=${pageNumber + 1}`)
  }
  return (
    <div className='flex w-[200px] justify-between'>
      <button
        className='lastPage rounded-lg bg-slate-600 px-4 py-2 hover:bg-slate-400 disabled:bg-slate-700 disabled:hover:bg-slate-700'
        disabled={currentPage === '1'}
        onClick={onPrev}
      >
        Prev
      </button>
      <span className='flex items-center'>{currentPage}</span>
      <button
        className='lastPage rounded-lg bg-slate-600 px-4 py-2 hover:bg-slate-400 disabled:bg-slate-700 disabled:hover:bg-slate-700'
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  )

  // <button
  //         onClick={
  //           currPage != 1
  //             ? () => {
  //                 loadPage(currPage - 1);
  //                 setCurrPage(currPage - 1);
  //               }
  //             : () => {}
  //         }
  //         className="rounded-lg bg-green-300 px-5 py-3 hover:bg-green-400 transition duration-200"
  //       >
  //         Prev
  //       </button>
  //       <div className="rounded-full py-4 px-6 bg-green-300">{currPage}</div>
  //       <button
  //         onClick={
  //           maxPage
  //             ? () => {}
  //             : () => {
  //                 loadPage(currPage + 1);
  //                 setCurrPage(currPage + 1);
  //               }
  //         }
  //         className="rounded-lg bg-green-300 px-5 py-3 hover:bg-green-400 transition duration-200"
  //       >
  //         Next
  //       </button>
}
