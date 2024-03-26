import { getPosts, getPostsByCategorySlug } from '@/queries/post'
import PostCard from '../Card'
import Empty from '@/components/ui/empty'
import { Skeleton } from '@nextui-org/react'
import { cn } from '@/lib/utils'

interface PostListProps {
  category?: string
}
export default async function PostList({ category }: PostListProps) {
  const fetcher = category ? getPostsByCategorySlug({ category }) : getPosts({})
  const posts = await fetcher

  return (
    <div
      className={cn('flex flex-wrap gap-4', {
        'justify-around': posts.length > 3
      })}
    >
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}

      {posts.length === 0 && <Empty />}
    </div>
  )
}
