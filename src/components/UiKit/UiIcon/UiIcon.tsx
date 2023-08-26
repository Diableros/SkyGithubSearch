import * as S from './UiIcon.style'

import { icons } from '@/assets/icons'

type PropsType = {
  name: keyof typeof icons
  color?: string
  width?: string
  height?: string
  onClick?: () => void
}

const UiIcon = ({
  color = 'inherit',
  width,
  height,
  name,
  onClick,
}: PropsType) => {
  const Icon = icons[name]

  return (
    <S.IconWrapper
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      pointer={Boolean(onClick)}
    >
      <Icon width={width} height={height} color={color} />
    </S.IconWrapper>
  )
}

export default UiIcon
