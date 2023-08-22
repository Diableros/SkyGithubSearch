import { dateFormat } from './utils'

import { fieldNames } from './constants'

import * as S from './UserDetails.style'

type PropsType = {
  isOpen: boolean
  userDetails?: Record<string, string | boolean | null | number>
}

const UserDetailsData = ({ isOpen, userDetails }: PropsType) => {
  return userDetails ? (
    <S.DetailsWrapper isOpen={isOpen}>
      {Object.entries(userDetails).map(([fieldKey, value]) => (
        <S.Field key={fieldKey}>
          <S.FieldName>{fieldNames[fieldKey]}:</S.FieldName>
          <span>
            {['created_at', 'updated_at'].includes(fieldKey)
              ? dateFormat(String(value))
              : value}
          </span>
        </S.Field>
      ))}
    </S.DetailsWrapper>
  ) : null
}

export default UserDetailsData
