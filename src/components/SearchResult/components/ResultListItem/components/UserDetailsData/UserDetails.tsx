import * as React from 'react'

import { dateFormat } from './utils'

import { fieldNames } from './constants'
import { TestID } from '@/enums'

import * as S from './UserDetails.style'

type PropsType = {
  isOpen: boolean
  userDetails?: Record<string, string | boolean | null | number>
}

const UserDetailsData = ({ isOpen, userDetails }: PropsType) => {
  const measuringRef = React.useRef<HTMLDivElement>(null)
  const [detailsHeight, setDetailsHeight] = React.useState<number>(0)

  React.useEffect(() => {
    const detailsHeight = measuringRef.current.offsetHeight
    if (detailsHeight && userDetails) setDetailsHeight(detailsHeight)
  }, [userDetails])

  return (
    <S.DetailsWrapper
      isOpen={isOpen}
      openHeight={detailsHeight}
      data-testid={`${TestID.UserDetailData}${userDetails?.id || ''}${
        isOpen ? TestID.UserDetailDataIsOpen : ''
      }`}
    >
      <S.MeasuringBlock ref={measuringRef}>
        {userDetails &&
          Object.entries(userDetails).map(([fieldKey, value]) => (
            <S.Field key={fieldKey}>
              <S.FieldName>{fieldNames[fieldKey]}:</S.FieldName>
              <span>
                {['created_at', 'updated_at'].includes(fieldKey)
                  ? dateFormat(String(value))
                  : value}
              </span>
            </S.Field>
          ))}
      </S.MeasuringBlock>
    </S.DetailsWrapper>
  )
}

export default UserDetailsData
