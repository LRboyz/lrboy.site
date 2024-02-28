/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { type PortableTextComponentProps } from '@portabletext/react'
import { Image, Modal, ModalContent } from '@nextui-org/react'
import { motion } from 'framer-motion'

export function PortableTextImage({
  value
}: PortableTextComponentProps<{
  _key: string
  url: string
  dimensions: {
    width: number
    height: number
  }
  lqip?: string
  label?: string
  alt?: string
}>) {
  const [isZoomed, setIsZoomed] = React.useState(false)
  const hasLabel = React.useMemo(() => typeof value.label === 'string' && value.label.length > 0, [value.label])

  return (
    <div data-blockid={value._key} className='group relative pr-3 md:pr-0'>
      <div className={cn(hasLabel ? 'w-full rounded-2xl bg-zinc-100 p-2 dark:bg-zinc-800' : '')}>
        <motion.div className='relative' layoutId={`image_${value._key}`}>
          <Image
            onClick={() => setIsZoomed(true)}
            src={value.url}
            width={value.dimensions.width}
            height={value.dimensions.height}
            className={cn(
              'relative z-20 cursor-zoom-in dark:brightness-75 dark:transition-[filter] dark:hover:brightness-100',
              hasLabel ? 'rounded-xl' : 'rounded-xl md:rounded-3xl'
            )}
            alt={value.alt || ''}
            fetchPriority='high'
          />
        </motion.div>
        {hasLabel && (
          <span className='flex w-full my-4 items-center justify-center text-center text-sm font-medium text-zinc-500 dark:text-zinc-400'>
            {value.label}
          </span>
        )}
      </div>

      <Modal isOpen={isZoomed} onClose={() => setIsZoomed(false)} size='5xl'>
        <ModalContent>
          <Image
            onClick={() => setIsZoomed(true)}
            src={value.url}
            width={value.dimensions.width}
            height={value.dimensions.height}
            className={cn(
              'relative z-20 cursor-zoom-in dark:brightness-75 dark:transition-[filter] dark:hover:brightness-100',
              hasLabel ? 'rounded-xl' : 'rounded-xl md:rounded-3xl'
            )}
            alt={value.alt || ''}
            fetchPriority='high'
          />
        </ModalContent>
      </Modal>
    </div>
  )
}
