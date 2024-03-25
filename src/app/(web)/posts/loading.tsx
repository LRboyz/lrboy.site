import { Skeleton } from '@nextui-org/react'
import PostLayout from './PostLayout'

export default function Loading() {
  return (
    <PostLayout>
      <div className='p-4'>
        <Skeleton className='rounded-lg'>
          <div className='h-36 rounded-lg bg-default-300'></div>
        </Skeleton>
        <div className='w-full flex flex-col items-center justify-center space-y-3 mt-4'>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-2/5 rounded-lg'>
            <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
          </Skeleton>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-3 mt-4'>
          <Skeleton className='w-2/5 rounded-lg'>
            <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
        </div>
      </div>
    </PostLayout>
  )
}
