import CarouselList from '@/components/carousel'
import PostList from './List'
import Loading from './loading'
import { getPosts } from '@/queries/post'

export default async function PostPage() {
  const posts = await getPosts({})
  return (
    <div className='w-full flex flex-col gap-4'>
      <CarouselList posts={posts} />
      <PostList posts={posts} />
    </div>
  )
}
