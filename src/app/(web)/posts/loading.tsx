import { Skeleton } from '@nextui-org/react'

export default function Loading() {
  return (
    <div className='w-full flex flex-wrap gap-4 justify-around'>
      {Array.from({ length: 9 }).map((item, key) => (
        <div key={key} className='p-4 w-64 bg-zinc-100/80 dark:bg-zinc-700/40 rounded-md'>
          <Skeleton className='rounded-lg' disableAnimation>
            <div className='h-36 rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='w-full flex flex-col space-y-3 mt-4'>
            <Skeleton className='w-4/5 rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-full rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg' disableAnimation>
              <div className='h-3 w-4/5  bg-default-200'></div>
            </Skeleton>
          </div>
        </div>
      ))}
    </div>
  )
}
