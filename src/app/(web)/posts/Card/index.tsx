'use client'

import { Post } from '@/lib/sanity/schema/post'
import { Eye, MessageSquare, Tag, ThumbsUpIcon } from 'lucide-react'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { BiCategoryAlt } from 'react-icons/bi'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
        <Card shadow='sm' isPressable className='w-64'>
          <CardBody className='overflow-visible p-0'>
            <Image
              isZoomed
              isBlurred
              radius='lg'
              width='100%'
              alt={post.title}
              className='w-full object-cover h-[140px]'
              src={post.mainImage.asset.url}
            />
          </CardBody>
          <CardFooter className='flex flex-col items-start text-small '>
            <b>{post.title}</b>
            <p className='text-default-500 mt-2 text-xs'>{post.description}</p>
            <div className='w-full flex flex-wrap justify-around text-zinc-500 mt-4 h-5 items-center space-x-4 text-small'>
              <div className='flex gap-1 items-center'>
                <Eye size={12} />
                <span className='text-xs'>11.5k</span>
              </div>
              <div className='flex gap-1 items-center'>
                <ThumbsUpIcon size={12} />
                <span className='text-xs'>12</span>
              </div>
              <div className='flex gap-1 items-center'>
                <MessageSquare size={12} />
                <span className='text-xs'>12</span>
              </div>
              <div className='flex gap-1 items-center'>
                <BiCategoryAlt size={12} />
                <span className='text-xs'>{post.categories[0].title}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
      {/* <div
        className='flex px-2 py-2 border border-divider group transition duration-150
        dark:bg-zinc-700/50 dark:hover:bg-zinc-800 dark:border-zinc-800 bg-white w-full 
        rounded-md cursor-pointer hover:shadow-lg'
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
            <p className='font-bold text-sm'>{post.title}</p>
            <p className='text-xs mt-2 text-zinc-500'>{post.description}</p>
          </div>
          <div className='flex flex-wrap justify-between text-zinc-500 mt-4 h-5 items-center space-x-4 text-small'>
            <div className='flex gap-1 items-center'>
              <Eye size={12} />
              <span className='text-xs'>11.5k</span>
            </div>
            <div className='flex gap-1 items-center'>
              <ThumbsUpIcon size={12} />
              <span className='text-xs'>12</span>
            </div>
            <div className='flex gap-1 items-center'>
              <MessageSquare size={12} />
              <span className='text-xs'>12</span>
            </div>
            <div className='flex gap-1 items-center'>
              <BiCategoryAlt size={12} />
              <span className='text-xs'>{post.categories[0].title}</span>
            </div>
          </div>
        </div>
      </div> */}
    </Link>
  )
}
