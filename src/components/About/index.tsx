import Title from '@components/Title'
import { resume } from '@data/social'
import { BriefcaseIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.25'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <circle cx='12' cy='9' r='6'></circle>
        <path d='M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889'></path>
        <path d='M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889'></path>
      </svg>
    ),
    name: 'Experience',
    value: '2 + Years',
  },
  {
    icon: <BriefcaseIcon strokeWidth={1.25} />,
    name: 'Completed',
    value: '40 + Projects',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.25'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <rect x='4' y='13' rx='2' width='4' height='6'></rect>
        <rect x='16' y='13' rx='2' width='4' height='6'></rect>
        <path d='M4 15v-3a8 8 0 0 1 16 0v3'></path>
        <path d='M18 19a6 3 0 0 1 -6 3'></path>
      </svg>
    ),
    name: 'Support',
    value: 'Online 24/7',
  },
]

const About = () => {
  return (
    <section id='about-me' className='container section'>
      <div>
        <Title title='About Me' desc='My introduction' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20'>
          <div className='rounded-2xl bb p-10'></div>
          <div>
            <div className='flex flex-wrap gap-4'>
              {cards.map((card, i) => (
                <div
                  key={i}
                  className='flex-1 min-w-[150px] bb rounded-lg flex flex-col items-center justify-center p-5'
                >
                  <div className='w-7 h-7 mb-1'>{card.icon}</div>
                  <p className='text-center text-lg my-2'>{card.name}</p>
                  <p className='text-center c-secondary text-sm'>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
            <p className='my-10 text-xl c-secondary'>
              I build web in javascript ecosystem, since 2019. Worked massively
              on UI/UX design using tons of libraries. I convert Figma designs
              into code with an eye of an eagle to pixel perfection. I&rsquo;m
              always up to date with latest technologies. I write clean,
              re-usable, scalable and performant code.
            </p>
            <a href={resume} target='_blank' rel='noreferrer'>
              <button className='btn btn-dark flex items-center space-x-3 rounded-2xl font-medium py-6 px-8'>
                <span className='whitespace-nowrap'>View Resume</span>
                <DocumentTextIcon className='w-6 -translate-y-1' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
