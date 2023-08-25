import * as React from 'react'

import UserDetailsData from './components/UserDetailsData'
import { getFilteredUserData } from './components/UserDetailsData/utils'
import UiButton from '@/components/UiKit/UiButtonLikeComponents/UiButton'
import UiIcon from '@/components/UiKit/UiIcon'
import UiTooltip from '@/components/UiKit/UiTooltip'

import { User } from '@/api/types'
import useUserDetails from '@/api/useUserDetails'

import { TestID } from '@/enums'

import * as S from './ResultListItem.style'

type PropsType = {
  user: User
}

const ResultListItem = ({
  user: { id, avatar_url, login, html_url, type },
}: PropsType) => {
  const [isDetailsOpen, toggleDetailsOpen] = React.useReducer(
    prev => !prev,
    false,
  )

  const { mutate: getUserDetails, data, isLoading } = useUserDetails()

  const handleOnClick = () => {
    if (!data) {
      getUserDetails(login)
    } else {
      toggleDetailsOpen()
    }
  }

  React.useEffect(() => {
    if (data && !isLoading) toggleDetailsOpen()
  }, [data, isLoading])

  return (
    <section data-testid={TestID.ResultListItem}>
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
            testid={`${TestID.UserDetailButton}_${id}`}
            hPadding='0.5rem'
            title={
              <S.IconRotator $rotate={isDetailsOpen}>
                <UiIcon
                  name={isLoading ? 'loader' : 'arrowDown'}
                  width='1rem'
                />
              </S.IconRotator>
            }
            onClick={handleOnClick}
          />
        </UiTooltip>
      </S.ResultListItem>
      <UserDetailsData
        isOpen={isDetailsOpen}
        userDetails={getFilteredUserData(data)}
      />
    </section>
  )
}

export default ResultListItem
