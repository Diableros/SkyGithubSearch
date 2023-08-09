import * as React from 'react'

import UiButton from '@/components/UiKit/UiButton-like/UiButton'
import UiIcon from '@/components/UiKit/UiIcon'

import { User } from '@/api/types'

import * as S from './ResultListItem.style'

type PropsType = {
  user: User
}

const ResultListItem = ({ user: { id, avatar_url, login } }: PropsType) => {
  const [isLoading, toggleLoading] = React.useState<boolean>(false)

  return (
    <S.ResultListItem key={id}>
      <S.UserInfo>
        <S.UserAvatar src={avatar_url} alt={login} />
        <span>{login}</span>
      </S.UserInfo>
      <UiButton
        hPadding='0.5rem'
        title={
          <UiIcon name={isLoading ? 'loader' : 'arrowDown'} width='1rem' />
        }
        onClick={() => {
          toggleLoading(prev => !prev)
          console.log(`Show details ${login}`)
        }}
      />
    </S.ResultListItem>
  )
}

export default ResultListItem
