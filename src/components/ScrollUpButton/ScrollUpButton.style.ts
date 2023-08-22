import styled from '@emotion/styled'

import { buttonGeneral } from '../UiKit/UiButtonLikeComponents/buttonLikeGeneral.style'

type ScrollUpProps = {
  isShow: boolean
}

export const ScrollUp = styled.button<ScrollUpProps>`
  ${buttonGeneral}

  position: fixed;
  padding: 1rem;
  width: 3rem;
  height: 3rem;

  left: calc(50% + 21rem);
  bottom: ${({ isShow }) => (isShow ? '2rem' : '-3rem')};

  transition: bottom 0.3s;
`

export const IconRotator = styled.div`
  transform: rotate(-90deg);
`
