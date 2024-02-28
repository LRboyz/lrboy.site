import { cn } from '@/lib/utils'
import styles from './loader.module.css'

export default function Loader() {
  return (
    <div className='h-9 flex items-center'>
      <div className={cn(styles.loader)}></div>
    </div>
  )
}
