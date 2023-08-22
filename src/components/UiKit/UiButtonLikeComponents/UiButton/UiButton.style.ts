import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

type ButtonProps = {
  hPadding?: string
  fontSize?: string
}

export const Button = styled.button<ButtonProps>`
  ${buttonGeneral}

  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : '')}
  ${({ hPadding }) =>
    hPadding ? `padding-left: ${hPadding}; padding-right:${hPadding}` : ''}
`
