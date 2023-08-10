import * as React from 'react'

import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'

import { paginationSelectOptions } from './constants.ts'

import * as S from './UiPagination.style'

const UiPagination = () => {
  return (
    <S.PaginationBox>
      <UiSelectButton selectOptions={paginationSelectOptions} />
    </S.PaginationBox>
  )
}

export default UiPagination
