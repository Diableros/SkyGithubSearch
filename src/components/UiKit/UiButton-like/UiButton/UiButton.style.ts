import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

type ButtonProps = {
  hPadding?: string
}

export const Button = styled.button<ButtonProps>`
  ${buttonGeneral}

  ${({ hPadding }) =>
    hPadding ? `padding-left: ${hPadding}; padding-right:${hPadding}` : ''}
`
