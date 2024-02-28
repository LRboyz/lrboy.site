import { getPostById } from '@/queries/post'
import PostLayout from '../PostLayout'
import PostDetail from './PostDetail'

export interface PostDetailPageProps {
  params: {
    id: string
  }
}

export default async function PostDetailPage({ params: { id } }: PostDetailPageProps) {
  const post = await getPostById(id)

  return (
    <PostLayout isPostDetail={id !== undefined} headings={post.headings}>
      <PostDetail post={post} />
    </PostLayout>
  )
}
