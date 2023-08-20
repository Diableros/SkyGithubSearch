import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { Action, useSearchContext } from '@/context'

import { paginationSelectOptions } from '../constants'

import * as S from './PaginationBar.style'

type PropsType = {
  position: Position
}

const PaginationBar = ({ position }: PropsType) => {
  const [{ pagination }, dispatch] = useSearchContext()

  const handlePageSizeOnChange = (selectedOption: SelectOption) => {
    dispatch({
      type: Action.Pagination,
      payload: { ...pagination, pageSize: Number(selectedOption.value) },
    })
  }

  return (
    <S.PaginationBox>
      <UiSelectButton
        selectedValue={paginationSelectOptions.find(
          option => option.value === String(pagination.pageSize),
        )}
        onChange={handlePageSizeOnChange}
        selectOptions={paginationSelectOptions}
        position={position}
        width='0'
      />
    </S.PaginationBox>
  )
}

export default PaginationBar
