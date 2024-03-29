import { cn } from '@/lib/utils'
import styles from './loader.module.css'

export default function Loader() {
  return (
    <div className='flex items-center mx-4'>
      <div className={cn(styles.loader)}></div>
    </div>
  )
}
