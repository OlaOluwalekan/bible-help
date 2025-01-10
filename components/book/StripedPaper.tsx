'use client'

import { useEffect, useRef } from 'react'

const StripedPaper = ({ content }: { content: any }) => {
  const editableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editableRef.current) {
      editableRef.current.innerHTML = content // Set initial content
    }
  }, [content])

  return (
    <div className='w-full h-full paperShadow'>
      <div className='w-full h-3 bg-topColor'></div>
      <div
        ref={editableRef}
        className='w-full h-full paperBg leading-4 text-xs text-black'
        contentEditable='true'
      ></div>
    </div>
  )
}

export default StripedPaper
