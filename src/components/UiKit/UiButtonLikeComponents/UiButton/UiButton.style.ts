import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

type ButtonProps = {
  hPadding?: string
  fontSize?: string
  isActive: boolean
}

export const Button = styled.button<ButtonProps>`
  ${buttonGeneral}

  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : '')}
  ${({ hPadding }) =>
    hPadding ? `padding-left: ${hPadding}; padding-right:${hPadding};` : ''}

  ${({ isActive, theme }) =>
    isActive ? `border: 1px solid ${theme.colors.inputOutline};` : ''}
  
  &:disabled {
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
      background-color: ${({ theme }) => theme.colors.backgroundThird};
    }
    background-color: ${({ theme }) => theme.colors.backgroundThird};
    color: ${({ theme }) => theme.colors.textPrimary40};

    cursor: default;

    pointer-events: none;
  }
`
