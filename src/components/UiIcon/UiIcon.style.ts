import styled from '@emotion/styled'

type IconWrapperType = {
  width: string
  height: string
  color: string
  pointer: boolean
}

export const IconWrapper = styled.span<IconWrapperType>`
  display: flex;

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  color: ${({ theme, color }) => color || theme.colors.textPrimary};

  ${({ pointer }) => (pointer ? `cursor: pointer;` : '')}
`
