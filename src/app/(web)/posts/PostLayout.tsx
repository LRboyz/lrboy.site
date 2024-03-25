import Nav from './Nav'
// import Sidebar from './Sidebar'

interface PostLayoutProps {
  children: React.ReactNode
  isPostDetail?: boolean
  headings?: any[]
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <div
      className='flex bg-white dark:bg-dark relative justify-between w-full max-w-4xl
     border-divider gap-4 min-h-screen mx-auto'
    >
      <div className='mt-28 flex w-full'>
        <Nav />
        <div className='flex-1  px-4'>{children}</div>
        {/* <Sidebar isPostDetail={isPostDetail} headings={headings} /> */}
      </div>
    </div>
  )
}
