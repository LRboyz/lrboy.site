import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl px-4 min-h-screen mx-auto pt-28'>
      {/* <div>
        <p className='text-lg font-bold tracking-widest'>博客文章</p>
        <Divider className='my-4' />
      </div> */}

      <div className='flex gap-4'>
        <div className='w-[200px] '>
          <Navbar />
        </div>
        <main className='flex-1'>{children}</main>
        <div className='w-[240px]'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
