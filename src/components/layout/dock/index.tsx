'use client'

import { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { GithubIcon, TwitterIcon } from 'lucide-react'
import { HomeIcon } from '../../icons/Home'
import { CameraIcon } from '../../icons/Camera'
import { PenIcon } from '../../icons/Pen'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import { ThemeSelector } from '@/components/ThemeSelector'

// import { atom, useAtom } from "jotai";
type MenuItem = {
  title: string
  url?: string
  icon: any
}
const MenuItems = [
  {
    title: 'Home',
    icon: HomeIcon,
    url: '/'
  },
  {
    title: 'Posts',
    icon: PenIcon,
    url: '/posts'
  },
  {
    title: 'Photo',
    icon: CameraIcon,
    url: '/photo'
  },
  {
    title: 'Github',
    icon: GithubIcon
  },
  {
    title: 'Twitter',
    icon: TwitterIcon
  }
]

export function Dock() {
  const navigate = useRouter()
  const [focused, setFocusedIndex] = useState<number | null>(null)

  const onClickMenu = (item: MenuItem) => {
    navigate.push(item.url!)
  }

  return (
    <div className='flex gap-4 items-center'>
      {MenuItems.map((item, index) => (
        <MenuItem key={index} focused={focused} index={index} setFocusedIndex={setFocusedIndex}>
          <Button isIconOnly onClick={() => onClickMenu(item)} className={cn('rounded-full bg-btn dark:bg-btn-dark')}>
            {<item.icon className='w-2 hsl dark:hsl-dark' style={{ scale: 2.5 }} />}
          </Button>
        </MenuItem>
      ))}
      <MenuItem index={6} setFocusedIndex={setFocusedIndex} focused={focused}>
        <ThemeSelector />
      </MenuItem>
    </div>
  )
}

type MenuItemProps = {
  children: React.ReactNode
  focused: number | null
  setFocusedIndex: (focusedIndex: number | null) => void
  index: number
}

function MenuItem({ children, focused, setFocusedIndex, index }: MenuItemProps) {
  const diff = (a: number, b: number) => Math.abs(a - b)
  const scale = useMotionValue(focused && diff(focused, index) === 1 ? 1.25 : 1)

  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      onMouseEnter={() => setFocusedIndex(index)}
      onMouseLeave={() => setFocusedIndex(null)}
      style={{
        scale,
        originY: 1
      }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
