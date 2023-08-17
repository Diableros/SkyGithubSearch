import * as S from './UiButton.style'

type PropsType = {
  title: string | React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  icon?: React.ReactNode
  hPadding?: string
  onClick?: () => void
}

const UiButton = ({ title, type = 'button', icon, onClick, hPadding }: PropsType) => {
  return (
    <S.Button type={type} onClick={onClick} hPadding={hPadding}>
      {icon}
      <span>{title}</span>
    </S.Button>
  )
}

export default UiButton
