'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CSSProperties } from 'react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import './swiper.css'
import { Image } from '@nextui-org/react'
import { Post } from '@/lib/sanity/schema/post'

interface CarouselSliderProps {
  posts?: Post[]
}

const CarouselStyles: CSSProperties = {
  width: '100%',
  height: 260,
  display: 'flex',
  alignItems: 'center',
  padding: '',
  borderRadius: 0,
  zIndex: -1
}
const CarouselSettings: SwiperOptions = {
  modules: [Navigation, Autoplay, Pagination],
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  // speed: 500,
  autoplay: {
    //   delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  }
}

export default function CarouselList({ posts = [] }: CarouselSliderProps) {
  return (
    <Swiper {...CarouselSettings} className='overflow-hidden rounded-xl relative'>
      {posts.slice(0, 5).map((slide, index) => (
        <SwiperSlide style={{ ...CarouselStyles }} key={index}>
          <div
            className='shadow-light dark:shadow-dark hover:shadow-none hover:dark:shadow-none
             absolute right-4 top-4 z-20 bg-zinc-600/60 text-white px-4 cursor-pointer
              hover:bg-[#fefefe] dark:bg-[#2a2a2a]/80 py-1 dark:text-zinc-300/80
               hover:text-zinc-800 transition-all dark:hover:text-white ease-in-out duration-300'
          >
            <p className='font-bold text-sm '>{slide.title}</p>
          </div>

          <Image
            isZoomed
            src={slide.mainImage.asset.url}
            alt={slide.title}
            className='select-none ring-1 ring-zinc-900/5 
              transition dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 
              '
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
