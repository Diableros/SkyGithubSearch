import { User } from '@/api/types'

import * as S from './ResultList.style'

type PropsType = {
  resultData: User[]
}

const ResultList = ({ resultData }: PropsType) => {
  return (
    <>
      {resultData.map(({ avatar_url, login, id }) => (
        <S.SearchListItem key={id}>
          <S.UserInfo>
            <S.UserAvatar src={avatar_url} alt={login} />
            <span>{login}</span>
          </S.UserInfo>
          <span>Details</span>
        </S.SearchListItem>
      ))}
    </>
  )
}

export default ResultList
