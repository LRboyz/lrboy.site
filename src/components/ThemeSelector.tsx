'use client'

import { Button } from '@nextui-org/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const onClickTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button isIconOnly className='rounded-full bg-btn dark:bg-btn-dark' onClick={onClickTheme}>
      {theme === 'dark' ? <SunIcon className='w-6 h-6 hsl icon' /> : <MoonIcon className='w-6 h-6 hsl icon' />}
    </Button>
  )
}
