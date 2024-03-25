import '@/styles/global.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Providers } from './Providers'
import PreLoader from '@/components/motionFrames/PreLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LRboyz的数字花园',
  description: '万物归一'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      </head>
      <body className={cn('relative font-sans antialiased', inter.className)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          {/* <PreLoader /> */}
          <div className='flex bg-white dark:bg-dark flex-col min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'>
            <Navbar />
            <main className=''>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
