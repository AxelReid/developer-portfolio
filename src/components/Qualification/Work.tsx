import { CalendarDaysIcon } from '@heroicons/react/24/outline'

interface Props {
  title: string
  company: string
  site?: string
  date: {
    start: string
    end: string
  }
  className?: string
}

const Work: React.FC<Props> = ({
  title,
  company,
  site,
  date,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h4 className='text-xl md:text-2xl font-medium'>{title}</h4>
      <div className='flex items-center c-secondary mt-1 mb-4 gap-2 text-sm md:text-base'>
        <p>{company}</p>
        {site && (
          <>
            -
            <a
              href={'https://' + site}
              target='_blank'
              rel='noreferrer'
              className='text-blue-400 hover:underline underline-offset-2'
            >
              {site}
            </a>
          </>
        )}
      </div>
      <div className='flex items-center c-secondary gap-1.5 text-sm md:text-base'>
        <CalendarDaysIcon className='w-5 h-5 -mt-0.5' />
        <p>{date.start}</p>-<p>{date.end}</p>
      </div>
    </div>
  )
}

export default Work
