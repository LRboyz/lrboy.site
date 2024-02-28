import { Suspense } from 'react'
import PostList from './List'
import Category from './Category'
import PostLayout from './PostLayout'
import CarouselList from '@/components/carousel'
import { getPostsByCategorySlug, getPosts } from '@/queries/post'

interface Props {
  searchParams: {
    category?: string
  }
}

export default async function PostPage({ searchParams }: Props) {
  const { category } = searchParams
  const fetcher = category ? getPostsByCategorySlug({ category }) : getPosts({})
  const posts = await fetcher

  return (
    <PostLayout>
      <div className='flex justify-between'>
        <div className='w-full py-4 px-2 border-b border-divider'>博客</div>
      </div>

      <div className='my-2'>{category ? <Category category={category} /> : <CarouselList posts={posts} />}</div>
      <div className='flex flex-col gap-4'>
        <Suspense fallback={<div className='w-full flex justify-center p-4'>Loading...</div>}>
          <PostList category={category} />
        </Suspense>
      </div>
    </PostLayout>
  )
}
