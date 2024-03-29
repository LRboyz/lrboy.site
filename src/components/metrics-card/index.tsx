import { cn } from '@/lib/utils'
import { useSpring, animated } from '@react-spring/web'
import Loader from '../ui/loader'

export interface MetricCardProps {
  loading?: boolean
  value: number
  className?: string
}

const MetricCard = ({ value = 0, loading, className }: MetricCardProps) => {
  const props = useSpring({ x: Number(value) || 0, from: { x: 0 } })

  return (
    <div className={cn('', className)}>
      {loading ? (
        <Loader />
      ) : (
        <animated.div className='text-xl font-bold' title={props.x as any}>
          {props.x.to(x => x.toFixed(0))}
        </animated.div>
      )}

      {/* <div className={cn(' whitespace-nowrap')}>{label}</div> */}
    </div>
  )
}

export default MetricCard
