import MetricCard from '@/components/metrics-card'
import { getPostsCount } from '@/queries/post'
import { useQuery } from '@tanstack/react-query'

export default function Analysis() {
  const { data: postCount = 0, isLoading: postCountLoading } = useQuery({
    queryKey: ['postCount'],
    queryFn: () => getPostsCount()
  })

  return (
    <div className='grid grid-cols-3 p-4'>
      <MetricCard label={'浏览量'} value={1888} loading />
      <MetricCard label={'文章'} value={222} loading={postCountLoading} />
      <MetricCard label={'留言'} value={88} />
    </div>
  )
}
