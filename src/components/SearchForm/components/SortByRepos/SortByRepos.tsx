import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'

import { sortByOptions } from './constants'

import * as S from './SortByRepos.style'

const SortByRepos = () => {
  return (
    <S.SortBox>
      <span>Sort result by repos quantity:</span>
      <UiSelectButton selectOptions={sortByOptions} />
    </S.SortBox>
  )
}

export default SortByRepos
