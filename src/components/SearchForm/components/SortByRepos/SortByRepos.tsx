import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { QueryParamsFields } from '@/hooks/useQueryParams/enums'
import { useQueryParams } from '@/hooks/useQueryParams/useQueryParams'

import { sortByOptions } from './constants'

import * as S from './SortByRepos.style'

const SortByRepos = () => {
  const [queryParams, setQueryParams] = useQueryParams()

  const handleOnChange = (selectedOption: SelectOption) => {
    setQueryParams({ [QueryParamsFields.Sort]: selectedOption.value })
  }

  return (
    <S.SortBox>
      <span>Sort result by repos quantity:</span>
      <UiSelectButton
        selectedValue={{
          title:
            queryParams[QueryParamsFields.Sort] &&
            sortByOptions.find(
              option => option.value === queryParams[QueryParamsFields.Sort],
            ).title,
          value: queryParams[QueryParamsFields.Sort],
        }}
        onChange={handleOnChange}
        selectOptions={sortByOptions}
      />
    </S.SortBox>
  )
}

export default SortByRepos
