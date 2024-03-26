import { getPostById } from '@/queries/post'
// import PostLayout from '../PostLayout'
import PostDetail from './PostDetail'
import { Suspense } from 'react'

export interface PostDetailPageProps {
  params: {
    id: string
  }
}

export default async function PostDetailPage({ params: { id } }: PostDetailPageProps) {
  const post = await getPostById(id)

  return <PostDetail post={post} />
}
