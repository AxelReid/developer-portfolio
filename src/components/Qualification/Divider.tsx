import React from 'react'

interface Props {
  i: number
  length: number
}
const Divider: React.FC<Props> = ({ i, length }) => {
  const first = !i
  const last = i === length - 1

  return (
    <div
      className={`${
        first ? 'mt-11 md:mt-7' : ''
      } w-14 sm:w-20 mr-2 sm:mr-4 md:mr-0 md:w-28 lg:w-32 relative flex justify-center items-stretch`}
    >
      <div
        className={`absolute ${
          first ? 'top-1' : 'top-[46px] md:top-8'
        } w-7 h-7 rounded-full border border-zinc-200 dark:border-zinc-700 p-1`}
      >
        <div className='rounded-full border-4 border-zinc-200 dark:border-zinc-700 w-full h-full bg-zinc-50 dark:bg-[#121212]'></div>
      </div>
      <div
        className={`w-0.5 ${
          first ? 'bg-gradient-to-t' : 'bg-gradient-to-b'
        } from-zinc-200 dark:from-zinc-700 ${
          first || last ? 'to-transparent' : 'to-zinc-200 dark:to-zinc-700'
        }`}
      />
    </div>
  )
}

export default Divider
