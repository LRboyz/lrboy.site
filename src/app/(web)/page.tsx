import LinkButton from '@/components/ui/link-button'
export default function Home() {
  return (
    <div className='tracking-widest absolute top-[50%] w-full md:max-w-5xl px-5 translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center'>
      <div className='flex flex-wrap gap-4'>
        <div className='md:w-1/2 w-full'>
          <p className='text-6xl md:text-8xl font-extrabold whitespace-nowrap '>你好</p>
          <div className='mt-6 text-5xl md:text-6xl py-4 flex items-center  whitespace-nowrap font-semibold'>
            <span className='mr-2'>我是</span>
            <span className='bg-oye/20 p-2 text-oye relative inline-block name border border-oye'> LRboy</span>
          </div>
        </div>

        <div className='flex-1 md:border-l-2  md:pl-6'>
          <p className='text-sm md:text-lg'>
            大家好👋，这是一个展示我的作品、创意、设计的地方，我会在这里分享我的设计作品、创意作品、以及其他一些有趣的内容，
            也希望能够在这里分享好用的技术和一些有用的知识，同时我也渴望能认识到更多的朋友，如果您对我的内容感兴趣，欢迎和我交流😊。
          </p>
          <div className='flex gap-6 mt-6'>
            <LinkButton text='前往博客' link='/posts' />
          </div>
        </div>
      </div>
    </div>
  )
}
