import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { Action, useSearchContext } from '@/context'

import { sortByOptions } from './constants'

import * as S from './SortByRepos.style'

const SortByRepos = () => {
  const [{ sort }, dispatch] = useSearchContext()

  const handleOnChange = (selectedOption: SelectOption) => {
    dispatch({ type: Action.Order, payload: selectedOption })
  }

  return (
    <S.SortBox>
      <span>Sort result by repos quantity:</span>
      <UiSelectButton
        selectedValue={sort}
        onChange={handleOnChange}
        selectOptions={sortByOptions}
      />
    </S.SortBox>
  )
}

export default SortByRepos
