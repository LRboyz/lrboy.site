import { navigation } from '@/constants/navigation'
import { useMemo } from 'react'

interface Props {
  category: string
}

export default function Category({ category }: Props) {
  const currNavigation = useMemo(() => {
    const navigates = navigation.filter(navigate => navigate.label === category)
    return navigates[0]
  }, [category])

  return (
    <div className='flex mb-4 w-full flex-col bg-btn dark:bg-btn-dark rounded-md border border-divider h-48 justify-center items-center'>
      <div className='flex flex-col items-center gap-2'>
        <div className='text-4xl'>
          <currNavigation.icon className='w-24 h-24' />
        </div>
        <span className='text-2xl'># {category}</span>
      </div>
    </div>
  )
}
