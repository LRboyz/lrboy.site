import { getPosts, getPostsByCategorySlug } from '@/queries/post'
import PostCard from '../Card'
import Empty from '@/components/ui/empty'

interface PostListProps {
  category?: string
}
export default async function PostList({ category }: PostListProps) {
  const fetcher = category ? getPostsByCategorySlug({ category }) : getPosts({})
  const posts = await fetcher
  return (
    <div className='flex flex-col gap-4'>
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}

      {posts.length === 0 && <Empty />}
    </div>
  )
}
