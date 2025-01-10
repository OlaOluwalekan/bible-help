import clsx from 'clsx'
import Pages from './Pages'
import FrontCover from './FrontCover'
import StripedPaper from './StripedPaper'
import BackCover from './BackCover'

const Book = ({ turned, openedPage }: { turned: boolean; openedPage: any }) => {
  return (
    <div className='perspective group relative w-[150px] h-[220px]'>
      {/* <Pages
        turned={turned}
        front='Page 3'
        back='Page 4'
        openedPage={openedPage}
        leafPage={{ front: 3, back: 4 }}
      />
      <Pages
        turned={turned}
        front='Page 1'
        back='Page 2'
        openedPage={openedPage}
        leafPage={{ front: 1, back: 2 }}
      /> */}
      <Pages
        turned={turned}
        back={<BackCover />}
        front={
          <div className='w-full h-full bg-gray-500 flex justify-center items-center'>
            Empty
          </div>
        }
        openedPage={openedPage}
        leafPage={{ front: 13, back: 14 }}
      />

      {[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((no) => {
        return (
          <Pages
            key={no}
            turned={turned}
            // front={`Page ${no}`}
            front={<StripedPaper content={`Page ${no}`} />}
            back={<StripedPaper content={`Page ${no + 1}`} />}
            // back={`Page ${no + 1}`}
            openedPage={openedPage}
            leafPage={{ front: no, back: no + 1 }}
          />
        )
      })}
      <Pages
        turned={turned}
        front={<FrontCover />}
        back='Empty'
        openedPage={openedPage}
        leafPage={{ front: -1, back: 0 }}
      />
    </div>
  )
}

export default Book
