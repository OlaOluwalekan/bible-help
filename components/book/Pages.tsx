import clsx from 'clsx'
import { ReactNode } from 'react'

const Pages = ({
  turned,
  front,
  back,
  leafPage,
  openedPage,
}: {
  turned: boolean
  front: ReactNode
  back: ReactNode
  leafPage: any
  openedPage: any
}) => {
  return (
    <div
      className={clsx(
        'w-[150px] h-[220px] absolute transform-style-preserver-3d transition-all duration-1000 origin-left',
        openedPage.right > leafPage.front ? 'rotate-y--180' : '',
        openedPage.right - 2 == leafPage.front ? 'z-20' : 'z-0'
        // openedPage - 1 == leafPage ? 'z-20' : 'z-0'
      )}
    >
      <div className='w-full h-full absolute backface-hidden overflow-hidden flex justify-center items-center rotate-y-0 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl'>
        {front}
      </div>
      <div className='w-full h-full absolute backface-hidden overflow-hidden bg-gray-600 flex justify-center items-center rotate-y--180 rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md'>
        {back}
      </div>
    </div>
  )
}

export default Pages
