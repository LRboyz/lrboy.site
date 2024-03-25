import { Dock } from '../dock'

export function Navbar() {
  return (
    <div className=' z-50 border backdrop-blur-md dark:border-zinc-800 fixed h-[58px] top-6 left-[50%] translateY(80px) translate-x-[-50%] flex gap-4 items-center px-6  text-black shadow-xl rounded-3xl'>
      <Dock />
    </div>
  )
}
