import styled from '@emotion/styled'

import { logotypes } from './constants'
import { Logotype } from './enums'

type LogotypeProps = {
  name: Logotype
}

export const Header = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`

export const LogotypeItem = styled.img<LogotypeProps>`
  height: 4rem;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em ${({ name }) => logotypes[name].shadow});
  }
`
