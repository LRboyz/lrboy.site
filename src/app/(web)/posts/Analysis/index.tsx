import MetricCard from '@/components/metrics-card'
import { getPostsCount } from '@/queries/post'
import { Divider } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { EyeIcon } from 'lucide-react'
import { MdArticle, MdComment, MdRemoveRedEye, MdViewAgenda } from 'react-icons/md'

export default function Analysis() {
  const { data: postCount = 0, isLoading: postCountLoading } = useQuery({
    queryKey: ['postCount'],
    queryFn: () => getPostsCount()
  })

  return (
    <div className='flex flex-col gap-4 bg-white dark:bg-dark border-1 border-divider text-zinc-500 rounded-md p-4'>
      <div className='flex text-sm items-center gap-4'>
        <MdArticle className='h-4 w-4 text-zinc-500' />
        <Divider orientation='vertical' className='h-4' />
        <div className='flex items-center gap-2 '>
          <MetricCard value={18} />
          <span className=' whitespace-nowrap'> 篇文章 </span>
        </div>
      </div>
      <div className='flex text-sm items-center gap-4'>
        <MdRemoveRedEye className='h-4 w-4 text-zinc-500' />
        <Divider orientation='vertical' className='h-4' />
        <div className='flex items-center gap-2 '>
          <MetricCard value={1888} loading />
          <span className=' whitespace-nowrap'> 次浏览 </span>
        </div>
      </div>
      <div className='flex text-sm items-center gap-4'>
        <MdComment className='h-4 w-4 text-zinc-500' />
        <Divider orientation='vertical' className='h-4' />
        <div className='flex items-center gap-2 '>
          <MetricCard value={181} />
          <span className=' whitespace-nowrap'> 条留言 </span>
        </div>
      </div>
    </div>
  )
}
