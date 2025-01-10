'use client'

import { useEffect, useState } from 'react'
import Book from './Book'

const BookContainer = () => {
  const [page, setPage] = useState<any>({ left: -2, right: -1 })
  //   const [page, setPage] = useState<{
  //     right: null | Number
  //     left: null | Number
  //   }>({ right: null, left: 0 })
  const [turned, setTurned] = useState(false)

  const handleNextClicked = () => {
    // setPage()
    setPage((prev: any) => {
      return { left: prev.left + 2, right: prev.right + 2 }
    })
  }

  const handlePrevClicked = () => {
    setPage((prev: any) => {
      return { left: prev.left - 2, right: prev.right - 2 }
    })
  }

  //   useEffect(() => {
  //     console.log(page.left, ',', page.right)
  //   }, [page])

  return (
    <div>
      <Book turned={turned} openedPage={page} />

      <article className='w-full flex justify-between mt-5'>
        <button
          className='btn'
          onClick={handlePrevClicked}
          disabled={page.left < 0}
        >
          Prev
        </button>
        <button
          className='btn'
          onClick={handleNextClicked}
          disabled={page.right > 13}
        >
          Next
        </button>
      </article>
    </div>
  )
}

export default BookContainer
