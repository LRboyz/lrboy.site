'use client'
import { Post, PostDetail } from '@/lib/sanity/schema/post'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { TbEye } from 'react-icons/tb'
import { LuTimer } from 'react-icons/lu'
import { BiTime } from 'react-icons/bi'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { PostPortableText } from '@/components/portable-text/PostPortableText'

interface PostDetailProps {
  post: PostDetail
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <article data-postid={post._id} className='p-4 overflow-hidden'>
      <header
        className='relative flex flex-col items-center after:absolute after:-bottom-1 after:block 
      after:h-px after:w-full after:rounded after:bg-gradient-to-r after:from-zinc-400/20 after:via-zinc-200/10
      after:to-transparent dark:after:from-zinc-600/20 dark:after:via-zinc-700/10'
      >
        <motion.div
          className='flex flex-col justify-center w-full items-center'
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.35,
            type: 'spring',
            stiffness: 120,
            damping: 20
          }}
        >
          <h1 className='text-2xl font-bold'>
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className='flex  gap-4 text-xs my-4 font-sans text-[#9e9e9e] justify-center'>
            <p className='flex items-center'>
              <TbEye className='mr-1' /> 共{11}
              次阅读
            </p>
            <p className='flex items-center'>
              <LuTimer />
              <span className='ml-1'>约{post.readingTime?.toFixed(0) ?? 0}分钟阅读</span>
            </p>
            <p className='flex items-center'>
              <BiTime className='mr-1' />
              发布于2天前
            </p>
            <p className='flex items-center'>{`# 前端`}</p>
          </div>
          <motion.div
            className='relative mb-7 aspect-[240/135] w-full md:mb-6'
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
          >
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              className='select-none rounded-2xl ring-1 ring-zinc-900/5 transition dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 md:rounded-3xl'
              placeholder='blur'
              blurDataURL={post.mainImage.asset.lqip}
              unoptimized
              fill
            />
          </motion.div>
        </motion.div>
      </header>

      <div className={cn('prose dark:prose-invert')}>
        <PostPortableText value={post.body} />
      </div>
    </article>
  )
}
