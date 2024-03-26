import { Divider } from '@nextui-org/react'
import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl bg-white dark:bg-zinc-800/70 px-4 min-h-screen mx-auto pt-28'>
      <div>
        <p className='text-lg font-bold tracking-widest'>博客文章</p>
        <Divider className='my-4' />
      </div>
      <div className='flex '>
        <div className='w-[200px]'>
          <Nav />
        </div>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  )
}
