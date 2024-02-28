'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider as NextUIv2Provider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIv2Provider>
      <NextThemesProvider {...themeProps}>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </NextThemesProvider>
    </NextUIv2Provider>
  )
}
