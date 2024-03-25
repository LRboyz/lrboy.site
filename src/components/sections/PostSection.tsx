import PostList from '@/app/(web)/posts/List'
import { PenIcon } from '../icons/Pen'

export default function PostSection() {
  return (
    <div id='postSection' className='h-screen flex flex-col  '>
      <div className='flex justify-center w-full gap-4 pt-32 items-center'>
        <PenIcon />
        <h4 className='text-3xl font-bold '> 最近文章</h4>
      </div>
      <div className='flex gap-8 mt-12'>
        <div className='w-1/2 flex items-center'>
          <p className='text-2xl'>这里记录着对技术的洞察与创新，是追求未来无限可能的见证。</p>
        </div>
        <div className='flex-1'>
          <PostList />
        </div>
      </div>
    </div>
  )
}
