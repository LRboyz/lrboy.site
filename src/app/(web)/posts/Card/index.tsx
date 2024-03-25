import { Post } from '@/lib/sanity/schema/post'
import { Eye, MessageSquare, Tag, ThumbsUpIcon } from 'lucide-react'
import { Image } from '@nextui-org/react'
import { BiCategoryAlt } from 'react-icons/bi'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post._id}`}>
      <div
        className='flex px-2 py-2 border border-divider group transition duration-150
        dark:bg-zinc-800/80 dark:hover:bg-zinc-900 dark:border-zinc-800 bg-white w-full rounded-md cursor-pointer hover:shadow-lg'
      >
        <div className='relative w-48 h-full hidden lg:block rounded-xl overflow-hidden '>
          <Image
            isZoomed
            isBlurred
            alt={post.description}
            sizes='100vw'
            src={post.mainImage.asset.url}
            className='w-full object-cover h-full'
          />
        </div>
        <div className='flex-1 ml-2 flex flex-col justify-between '>
          <div>
            <p className='font-bold text-md'>{post.title}</p>
            <p className='text-xs mt-2 text-zinc-500'>{post.description}</p>
          </div>
          <div className='flex flex-wrap justify-between text-zinc-500 mt-4 h-5 items-center space-x-4 text-small'>
            <div className='flex gap-1 items-center'>
              <Eye size={12} />
              <span className='text-xs'>11.5k</span>
            </div>
            {/* <Divider orientation="vertical" /> */}
            <div className='flex gap-1 items-center'>
              <ThumbsUpIcon size={12} />
              <span className='text-xs'>12</span>
            </div>
            {/* <Divider orientation="vertical" /> */}
            <div className='flex gap-1 items-center'>
              <MessageSquare size={12} />
              <span className='text-xs'>12</span>
            </div>
            {/* <Divider orientation="vertical" /> */}
            <div className='flex gap-1 items-center'>
              <BiCategoryAlt size={12} />
              <span className='text-xs'>{post.categories[0].title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
