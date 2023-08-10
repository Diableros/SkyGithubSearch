import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'

import { sortBy } from './constants'

import * as S from './SortByRepos.style'

const SortByRepos = () => {
  return (
    <S.SortBox>
      <span>Sort result by repos quantity:</span>
      <UiSelectButton selectItems={sortBy} />
    </S.SortBox>
  )
}

export default SortByRepos
