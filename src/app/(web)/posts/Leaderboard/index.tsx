import { RefreshCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Post } from '@/lib/sanity/schema/post'

interface LeaderboardProps {
  posts: Post[]
}

export default function Leaderboard({ posts = [] }: LeaderboardProps) {
  return (
    <div className='border w-full h-full bg-white shadow-md rounded-md dark:border-zinc-700'>
      <div className='flex justify-between items-center border-b px-2 py-1 text-sm'>
        <p>热门文章</p>
        <div className='flex gap-2 items-center'>
          <RefreshCcw className='w-3' />
          <span className=''>换一批</span>
        </div>
      </div>
      <ul className='flex px-2 py-3 text-sm flex-col gap-2'>
        {posts.slice(0, 5).map((item, index) => (
          <li key={index}>
            <div className='flex gap-2 items-center'>
              <span
                className={cn('bg-gradient-to-tr font-bold from-zinc-900 to-zinc-200 bg-clip-text text-transparent', {
                  'from-red-500 to-orange-400': [0, 1, 2].includes(index)
                })}
              >
                {' '}
                {index + 1}.
              </span>
              <span>{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
