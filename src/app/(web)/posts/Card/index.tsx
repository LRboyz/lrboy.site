'use client'

import { Post } from '@/lib/sanity/schema/post'
import { Eye, HeartIcon, MessageSquare, Tag, ThumbsUpIcon } from 'lucide-react'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { BiCategoryAlt, BiComment, BiHeart, BiSolidComment, BiSolidDashboard, BiSolidHeart } from 'react-icons/bi'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdComment, MdDashboard, MdFavorite, MdHeartBroken, MdRemoveRedEye } from 'react-icons/md'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post._id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div
          className='flex gap-4 px-2 py-2 border border-divider group transition duration-150
        dark:bg-zinc-800 dark:hover:bg-dark dark:border-zinc-700 bg-white w-full 
        rounded-md cursor-pointer hover:shadow-lg'
        >
          <div className='flex-1 ml-2 flex flex-col justify-between '>
            <div>
              <p className='font-bold text-lg'>{post.title}</p>
              <p className='text-xs mt-2 text-zinc-500'>{post.description}</p>
            </div>
            <div className='flex flex-wrap  text-zinc-500 mt-4 h-5 items-center space-x-4 text-small'>
              <div className='flex gap-1 items-center'>
                <MdRemoveRedEye size={12} />
                <span className='text-xs'>11.5k</span>
              </div>
              <div className='flex gap-1 items-center'>
                <MdFavorite size={12} />
                <span className='text-xs'>12</span>
              </div>
              <div className='flex gap-1 items-center'>
                <MdComment size={12} />
                <span className='text-xs'>12</span>
              </div>
              <div className='flex gap-1 items-center'>
                <MdDashboard size={12} />
                <span className='text-xs'>{post.categories[0].title}</span>
              </div>
            </div>
          </div>
          <div className='relative w-48 h-full hidden lg:block rounded-xl overflow-hidden '>
            <Image
              isZoomed
              isBlurred
              alt={post.description}
              sizes='100vw'
              src={post.mainImage.asset.url}
              className='w-full object-cover h-32'
            />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
