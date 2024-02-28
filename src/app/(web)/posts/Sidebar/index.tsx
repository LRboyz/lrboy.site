'use client'
import { Card } from '@nextui-org/react'
import Analysis from '../Analysis'
import { PostHeading } from '../[id]/PostHeading'

interface SidebarProps {
  isPostDetail: boolean
  headings: any[]
}

export default function Sidebar({ isPostDetail, headings }: SidebarProps) {
  console.log(headings, 6789)
  return (
    <div className='w-[260px] hidden lg:block px-2'>
      <Analysis />
      {isPostDetail && (
        <Card className='p-4'>
          <div className='border-b border-divider pb-2'>
            <p>文章目录</p>
          </div>
          <div className='py-4'>
            <PostHeading headings={headings} />
          </div>
        </Card>
      )}
    </div>
  )
}
