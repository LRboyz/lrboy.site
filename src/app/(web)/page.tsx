import MotionPost from '@/components/motionFrames/PostMotion'
import HeroSection from '@/components/sections/HeroSection'
import PostSection from '@/components/sections/PostSection'

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto'>
      <HeroSection />
      <MotionPost>
        <PostSection />
      </MotionPost>
      {/* <HeroSection /> */}
    </main>
  )
}
