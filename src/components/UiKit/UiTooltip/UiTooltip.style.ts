import styled from '@emotion/styled'

import { Coords } from './types'

type TooltipProps = {
  tooltipPos: Coords
}

export const Tooltip = styled.div<TooltipProps>`
  position: fixed;
  top: ${({ tooltipPos }) => tooltipPos.y - 40}px;
  left: ${({ tooltipPos }) => tooltipPos.x + 16}px;
  padding: 5px 10px;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  opacity: 0.6;
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  border-radius: ${({ theme }) => theme.border.radius};
`
