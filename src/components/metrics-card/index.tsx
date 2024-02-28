import { cn } from '@/lib/utils'
import { useSpring, animated } from '@react-spring/web'
import Loader from '../ui/loader'

export interface MetricCardProps {
  loading?: boolean
  value: number

  label: string
  className?: string
}

const MetricCard = ({ value = 0, loading, label, className }: MetricCardProps) => {
  const props = useSpring({ x: Number(value) || 0, from: { x: 0 } })

  return (
    <div className={cn('flex flex-col items-center', className)}>
      {loading ? (
        <Loader />
      ) : (
        <animated.div className='text-3xl h-9 font-bold' title={props.x as any}>
          {props.x.to(x => x.toFixed(0))}
        </animated.div>
      )}

      <div className={cn(' whitespace-nowrap')}>
        {label}
        {/* {~~change !== 0 && !hideComparison && (
          <animated.span
            className={cn(styles.change, {
              [styles.positive]: change * (reverseColors ? -1 : 1) >= 0,
              [styles.negative]: change * (reverseColors ? -1 : 1) < 0,
              [styles.plusSign]: change > 0
            })}
            title={changeProps?.x as any}
          >
            {changeProps.x.to(x => format(x))}
          </animated.span>
        )} */}
      </div>
    </div>
  )
}

export default MetricCard
