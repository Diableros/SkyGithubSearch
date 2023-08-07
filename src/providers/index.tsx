import EmotionThemeProvider from './themeProvider'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <EmotionThemeProvider>{children}</EmotionThemeProvider>
}
