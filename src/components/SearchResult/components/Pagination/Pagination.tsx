import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types.ts'
import * as S from './Pagination.style.ts'

import { paginationSelectOptions } from './constants.ts'

type PropsType = {
  resultTotalCount: number
  position: Position
}

const Pagination = ({ position }: PropsType) => {
  const handleOnChange = (selectedOption: SelectOption) => {
    console.log(selectedOption)
  }

  return (
    <S.PaginationBox>
      <UiSelectButton
        selectedValue={{
          title: 'title',
          value: 'value',
        }}
        onChange={handleOnChange}
        selectOptions={paginationSelectOptions}
        position={position}
        width='0'
      />
    </S.PaginationBox>
  )
}

export default Pagination
