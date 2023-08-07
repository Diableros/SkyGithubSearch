import { ThemeProvider } from '@emotion/react'

import { THEME } from '@/theme/constants'

const EmotionThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>
}

export default EmotionThemeProvider
