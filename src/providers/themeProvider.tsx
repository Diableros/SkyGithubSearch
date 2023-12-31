import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { THEME } from '@/theme/constants'

import { GlobalStyles } from '@/styles/global.style'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionThemeProvider theme={THEME}>
      <GlobalStyles />
      {children}
    </EmotionThemeProvider>
  )
}
