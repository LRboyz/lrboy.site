import { Skeleton } from '@nextui-org/react'

export default function Loading() {
  return (
    <div className=' w-full flex flex-wrap gap-4 justify-around'>
      <div className='w-full h-48 dark:bg-dark bg-white border-1 border-zinc-200 dark:border-zinc-700 rounded-lg relative'>
        <div className='absolute right-8 top-4'>
          <Skeleton className='rounded-sm  w-36' disableAnimation>
            <div className='h-8'></div>
          </Skeleton>
        </div>
        <div className='absolute left-8 bottom-4 flex flex-col gap-4'>
          <Skeleton className='rounded-sm w-20' disableAnimation>
            <div className='h-4'></div>
          </Skeleton>
          <Skeleton className='rounded-sm w-36' disableAnimation>
            <div className='h-4'></div>
          </Skeleton>
          <Skeleton className='rounded-sm w-36' disableAnimation>
            <div className='h-4'></div>
          </Skeleton>
        </div>
      </div>
      {Array.from({ length: 4 }).map((item, key) => (
        <div
          key={key}
          className=' p-4 w-full bg-white dark:bg-dark rounded-md border-1 border-zinc-100 dark:border-zinc-700'
        >
          <div className='flex gap-4 '>
            <div className='w-2/3 flex flex-col gap-4'>
              <Skeleton className='rounded-sm w-36' disableAnimation>
                <div className='h-4'></div>
              </Skeleton>
              <Skeleton className='rounded-sm w-full' disableAnimation>
                <div className='h-4'></div>
              </Skeleton>
              <Skeleton className='rounded-sm w-full' disableAnimation>
                <div className='h-4'></div>
              </Skeleton>
              <Skeleton className='rounded-sm w-3/4' disableAnimation>
                <div className='h-4'></div>
              </Skeleton>
            </div>
            <div className='flex-1'>
              <Skeleton className='rounded-lg' disableAnimation>
                <div className='h-28 rounded-lg bg-default-300'></div>
              </Skeleton>
            </div>
          </div>

          {/* <Skeleton className='rounded-lg' disableAnimation>
            <div className='h-36 rounded-lg bg-default-300'></div>
          </Skeleton> */}
          {/* <div className='w-full flex flex-col space-y-3 mt-4'>
            <Skeleton className='w-4/5 rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-full rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
          </div> */}
        </div>
      ))}
    </div>
  )
}
