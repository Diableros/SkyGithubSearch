import * as S from './UiButton.style'

type PropsType = {
  title: string | React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  icon?: React.ReactNode
  hPadding?: string
  fontSize?: string
  onClick?: () => void
  testid?: string
  isActive?: boolean
  disabled?: boolean
}

const UiButton = ({
  title,
  type = 'button',
  icon,
  onClick,
  hPadding,
  fontSize,
  testid,
  isActive = false,
  disabled = false,
}: PropsType) => {
  return (
    <S.Button
      fontSize={fontSize}
      type={type}
      onClick={onClick}
      hPadding={hPadding}
      data-testid={testid}
      isActive={isActive}
      disabled={disabled}
    >
      {icon}
      <span>{title}</span>
    </S.Button>
  )
}

export default UiButton
