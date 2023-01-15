import { CheckBadgeIcon } from '@heroicons/react/20/solid'

interface Props {
  name: string
  level: string
}

const Skill: React.FC<Props> = ({ name, level }) => {
  return (
    <div
      className='flex items-start gap-2.5 py-3 px-2 lg:px-5
      '
    >
      {/* border border-transparent 
      transition
      hover:duration-[0s]
      duration-500
      hover:bb
      hover:bg-zinc-50 dark:hover:bg-zinc-900
      active:bg-zinc-100 dark:active:bg-black/50
      rounded-xl py-3 px-5 */}
      <CheckBadgeIcon strokeWidth={1.25} className='w-5 mt-1 flex-shrink-0' />
      <div>
        <p className='text-lg'>{name}</p>
        <p className='c-secondary text-[12px]'>{level}</p>
      </div>
    </div>
  )
}

export default Skill
