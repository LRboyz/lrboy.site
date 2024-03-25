'use client'
import { Avatar, Button, Tooltip } from '@nextui-org/react'
import { AnimatedText } from '../animation/AnimatedText'
import MotionTitle from '../motionFrames/TitleMotion'
import { ChevronDownCircle } from 'lucide-react'
import { XIcon } from '../icons/XIcon'
import { GitHubIcon } from '../icons/GitHubIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import React from 'react'
import { cn } from '@/lib/utils'
import { QQIcon } from '../icons/QQIcon'
import { MailIcon } from '../icons/MailIcon'
import { Link as ScrollLink } from 'react-scroll'

export default function HeroSection() {
  return (
    <section className='relative flex h-screen items-center tracking-widest'>
      <div className='md:w-1/2 '>
        <MotionTitle>
          <div className='mt-6 text-5xl md:text-5xl py-4 flex items-center  whitespace-nowrap font-semibold'>
            <span className='mr-2'>{`Hi, I'm `}</span>
            <span className='bg-oye/20 p-2 mr-4 text-oye relative inline-block name border border-oye'> LRboy </span>
            👋,
          </div>
        </MotionTitle>

        <AnimatedText
          el='h2'
          text={['A Frontend <Developer />']}
          className='md:text-5xl  whitespace-nowrap font-semibold'
          repeatDelay={10000}
        ></AnimatedText>
        <MotionTitle>
          <p className='text-sm md:text-md mt-4'>
            大家好👋，这是一个展示我的作品、创意、设计的地方，我会在这里分享我的设计、创意作品、以及分享一些有趣的内容，同时我也渴望能认识到更多的朋友，如果您对我的内容感兴趣，可以通过以下方式找到我，欢迎和我交流😊。
          </p>
        </MotionTitle>
        <SocialIcons />
      </div>

      <div className='flex-1  flex justify-end  md:pl-6'>
        <Avatar
          className='w-64 h-64'
          src='/images/avatar.png'
          classNames={{
            base: 'bg-gradient-to-br from-[#c5c5c5] to-[#f5f5f5]'
          }}
        >
          LR
        </Avatar>
      </div>
      <div className='absolute bottom-10 left-[50%] translate-x-[50%]'>
        <ScrollLink
          to='postSection' // 这里的值应该是你想要滚动到的元素的 id 属性值
          smooth
          duration={1000}
          className='z-30'
        >
          <ChevronDownCircle className='animate-bounce cursor-pointer text-zinc-400 hover:text-zinc-100' />
        </ScrollLink>
      </div>
    </section>
  )
}

const IconMap = [
  {
    label: 'Email',
    icon: <MailIcon className='text-2xl' />,
    desc: '',
    className: 'bg-orange-500'
  },
  {
    label: 'X',
    icon: <XIcon className='text-2xl' />,
    desc: '',
    className: 'bg-zinc-700'
  },
  {
    label: 'QQ',
    icon: <QQIcon className='text-2xl' />,
    desc: '',
    className: 'bg-white'
  },
  {
    label: 'Github',
    icon: <GitHubIcon className='text-2xl' />,
    desc: '',
    className: 'bg-black'
  },
  {
    label: 'Telegram',
    icon: <TelegramIcon className='text-2xl' />,
    desc: '',
    className: 'bg-[#0088CC]'
  }
]

type IconMapType = typeof IconMap

function SocialIcons() {
  return (
    <div className='flex gap-4 mt-16'>
      {IconMap.map((item, index) => (
        <Tooltip key={index} content={item.label}>
          <Button isIconOnly variant='flat' size='sm' aria-label={item.desc} className={cn(item.className)}>
            {item.icon}
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
