import { PlusIcon } from '@heroicons/react/24/outline'

const MyTeam = () => {
  return (
    <>
      <div className='bg-white dark:bg-black/40 br border-0 border-y'>
        <div className='container pt-32 pb-7'>
          <div className='flex items-center justify-between'>
            <h1 className='text-7xl font-extrabold leading-normal'>My Team</h1>
            <div className='flex space-x-3'>
              <button className='btn btn-light py-3 px-5 font-medium flex space-x-3'>
                <span>Join team</span>
                <PlusIcon className='w-6' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyTeam
