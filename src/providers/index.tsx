import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import SearchContextProvider from './SearchContextProvider'

import { ThemeProvider } from './themeProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
})

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchContextProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </SearchContextProvider>
  )
}
