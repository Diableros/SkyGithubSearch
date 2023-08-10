import * as React from 'react'

import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'

import { paginationSelectOptions } from './constants.ts'

import * as S from './UiPagination.style'

type PropsType = {
  resultTotalCount: number
  position: Position
}

const UiPagination = ({ resultTotalCount, position }: PropsType) => {
  console.log(resultTotalCount)

  return (
    <S.PaginationBox>
      <UiSelectButton
        selectOptions={paginationSelectOptions}
        position={position}
        width='0'
      />
    </S.PaginationBox>
  )
}

export default UiPagination
