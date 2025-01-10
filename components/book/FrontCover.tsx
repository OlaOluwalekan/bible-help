const FrontCover = () => {
  return (
    <div className='w-full h-full bg-red-800 border-[1px] border-red-700 flex justify-center items-center'>
      <div className='w-full h-[30%]'>
        <section className='w-full h-[80%] bg-white px-2 text-red-800 text-xs'>
          January 2025
        </section>
        <section className='w-full h-[20%] bg-yellow-400'></section>
      </div>

      <div className='w-[25px] h-[103%] bg-red-900 absolute top-0 bottom-0 m-auto right-4 rounded flex gap-[2px] px-[2px]'>
        {[1, 2, 3, 4].map((no) => {
          return (
            <section key={no} className='h-full w-full bg-red-800'></section>
          )
        })}
      </div>
    </div>
  )
}

export default FrontCover
