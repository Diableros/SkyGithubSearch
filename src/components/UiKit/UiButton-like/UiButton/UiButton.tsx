import * as S from './UiButton.style'

type PropsType = {
  title: string | React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  icon?: React.ReactNode
  onClick?: () => void
}

const UiButton = ({ title, type = 'button', icon, onClick }: PropsType) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </S.Button>
  )
}

export default UiButton
