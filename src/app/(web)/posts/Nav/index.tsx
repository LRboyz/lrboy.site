'use client'

import { Navigate, navigation } from '@/constants/navigation'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

interface NavProps {}

export default function Nav({}: NavProps) {
  return (
    <div className='w-[200px] hidden md:block h-full shadow-md py-2 rounded-md'>
      <div className='sticky top-10'>
        <NavItem nav={{ label: 'Home', title: '主页', icon: Home }} href='/posts' />
        {navigation.map((nav, key) => (
          <NavItem key={key} nav={nav} />
        ))}
      </div>
    </div>
  )
}

function NavItem({ nav, href }: { nav: Navigate; href?: string }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const isActive = nav.label === category

  return (
    <Link
      href={href ? href : `/posts?category=${nav.label}`}
      className={cn(
        'flex px-4 py-2 my-1 hover:bg-zinc-200/50 dark:hover:bg-zinc-700  cursor-pointer duration-100 transition gap-2 items-center',
        {
          'bg-zinc-200/50 dark:bg-zinc-800': isActive
        }
      )}
    >
      <div className=' p-1 w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-md flex justify-center items-center border border-divider'>
        <nav.icon />
      </div>
      <div className='ml-1 whitespace-nowrap'>{nav.title}</div>
    </Link>
  )
}
