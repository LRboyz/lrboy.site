'use client'
import { navigation } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { Listbox, ListboxItem } from '@nextui-org/react'

export default function Navbar() {
  return (
    <Listbox
      aria-label='Listbox Variants'
      color='default'
      variant='flat'
      className='bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 border-1 rounded-md sticky top-10'
    >
      {navigation.map((navigate, key) => (
        <ListboxItem key={key}>
          <div className={cn('flex items-center gap-4')}>
            <div className=' p-1 w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-md flex justify-center items-center border border-divider'>
              <navigate.icon />
            </div>
            <span>{navigate.title}</span>
          </div>
        </ListboxItem>
      ))}
    </Listbox>
  )
}
