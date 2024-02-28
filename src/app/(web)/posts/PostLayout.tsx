import Nav from './Nav'
import Sidebar from './Sidebar'

interface PostLayoutProps {
  children: React.ReactNode
  isPostDetail?: boolean
  headings?: any[]
}

export default function PostLayout({ children, isPostDetail = false, headings = [] }: PostLayoutProps) {
  return (
    <div className='flex bg-white dark:bg-dark relative justify-between w-full max-w-6xl border-x border-divider gap-4 min-h-screen mx-auto'>
      <div className='mt-28 flex border-t border-divider w-full'>
        <Nav />
        <div className='flex-1 border-x border-divider px-4'>{children}</div>
        <Sidebar isPostDetail={isPostDetail} headings={headings} />
      </div>
    </div>
  )
}
