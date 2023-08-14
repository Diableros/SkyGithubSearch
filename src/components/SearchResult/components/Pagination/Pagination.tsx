import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types.ts'
import * as S from './Pagination.style.ts'

import { QueryParamsFields } from '../../../../hooks/useQueryParams/enums.ts'
import { useQueryParams } from '@/hooks/useQueryParams/useQueryParams.ts'

import { paginationSelectOptions } from './constants.ts'

type PropsType = {
  resultTotalCount: number
  position: Position
}

const UiPagination = ({ position }: PropsType) => {
  const [queryParams, setQueryParams] = useQueryParams()
  // console.log(`queryParamsObj =>`, queryParams)

  const handleOnChange = (selectedOption: SelectOption) => {
    setQueryParams({ [QueryParamsFields.PageSize]: selectedOption.value })
  }

  return (
    <S.PaginationBox>
      <UiSelectButton
        selectedValue={{
          title: queryParams[QueryParamsFields.PageSize],
          value: queryParams[QueryParamsFields.PageSize],
        }}
        onChange={handleOnChange}
        selectOptions={paginationSelectOptions}
        position={position}
        width='0'
      />
    </S.PaginationBox>
  )
}

export default UiPagination
