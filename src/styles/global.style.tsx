import { css, Global, useTheme } from '@emotion/react'

const GlobalCSS = () => {
  const theme = useTheme()

  return css`
    :root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
      line-height: 1.5;
      font-weight: 400;

      color: ${theme.colors.textPrimary};
      background-color: ${theme.colors.backgroundMain};
    }

    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-width: 320px;
      min-height: 100vh;

      color: ${theme.colors.textPrimary};

      & > div {
        position: relative;
        display: flex;
        flex-flow: column nowrap;

        gap: 1rem;

        min-width: 575px;
        margin: 0 auto;
        padding: 3rem 0 3rem;
        text-align: center;
      }
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.5;
      font-weight: 400;
    }
  `
}

export const GlobalStyles = () => <Global styles={GlobalCSS()} />
