import * as React from 'react'

import UiButton from '@/components/UiKit/UiButton-like/UiButton'
import UiIcon from '@/components/UiKit/UiIcon'
import UiTooltip from '@/components/UiKit/UiTooltip'

import { User } from '@/api/types'

import * as S from './ResultListItem.style'

type PropsType = {
  user: User
}

const ResultListItem = ({
  user: { id, avatar_url, login, html_url, type },
}: PropsType) => {
  // TODO create real query-hook for getting user data
  const [isLoading, toggleLoading] = React.useState<boolean>(false)

  return (
    <S.ResultListItem key={id}>
      <UiTooltip tooltipText={`Go to ${type.toLowerCase()} page`}>
        <S.UserInfo onClick={() => window.open(html_url, '_blank')}>
          <S.UserAvatar src={avatar_url} alt={login} />
          <span>{login}</span>
          <S.Type>[{type}]</S.Type>
        </S.UserInfo>
      </UiTooltip>
      <UiTooltip tooltipText='Show details'>
        <UiButton
          hPadding='0.5rem'
          title={
            <UiIcon name={isLoading ? 'loader' : 'arrowDown'} width='1rem' />
          }
          onClick={() => {
            // TODO send real query
            toggleLoading(prev => !prev)
            console.log(`Show details ${login}`)
          }}
        />
      </UiTooltip>
    </S.ResultListItem>
  )
}

export default ResultListItem
