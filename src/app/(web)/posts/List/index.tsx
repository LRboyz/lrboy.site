import { getPosts, getPostsByCategorySlug } from '@/queries/post'
import PostCard from '../Card'
import Empty from '@/components/ui/empty'
import { Skeleton } from '@nextui-org/react'
import { cn } from '@/lib/utils'
import { Post } from '@/lib/sanity/schema/post'

interface PostListProps {
  category?: string
  posts: Post[]
}
export default function PostList({ category, posts }: PostListProps) {
  return (
    <div
      className={cn('flex flex-col gap-4', {
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
