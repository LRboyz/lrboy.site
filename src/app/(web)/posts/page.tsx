import PostList from './List'
import Category from './Category'
import PostLayout from './PostLayout'
import CarouselList from '@/components/carousel'
import { getPostsByCategorySlug, getPosts } from '@/queries/post'
import { PenIcon } from '@/components/icons/Pen'

interface Props {
  searchParams: {
    category?: string
  }
}

export default async function PostPage({ searchParams }: Props) {
  const { category = '' } = searchParams
  const fetcher = category ? getPostsByCategorySlug({ category }) : getPosts({})
  const posts = await fetcher

  return (
    <PostLayout>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2 py-4 px-2'>
          <PenIcon />
          <p className='tracking-widest'>文章</p>
        </div>
      </div>

      <div className='my-2'>{category ? <Category category={category} /> : <CarouselList posts={posts} />}</div>
      <div className='flex flex-col gap-4 mt-4'>
        <PostList category={category} />
      </div>
    </PostLayout>
  )
}
