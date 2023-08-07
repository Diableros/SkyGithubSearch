import * as React from 'react'

import UiIcon from '@/components/UiIcon'

import { SortBy } from './enums'

import * as S from './SortByRepos.style'

const SortByRepos = () => {
  const [sortBy, setSortBy] = React.useState<SortBy>(SortBy.Default)
  const [isShowDroplist, setIsShowDroplist] = React.useState<boolean>(false)

  const handleClickSelectItem = (clickedItem: SortBy) => {
    setSortBy(clickedItem)
    setIsShowDroplist(false)
  }

  const droplistContent = (
    <S.Droplist onMouseLeave={() => setIsShowDroplist(false)}>
      {Object.values(SortBy).map(selectItem =>
        selectItem !== sortBy ? (
          <div
            key={selectItem}
            onClick={() => handleClickSelectItem(selectItem)}
          >
            <span>{selectItem}</span>
          </div>
        ) : null,
      )}
    </S.Droplist>
  )

  return (
    <S.SortBox>
      <span>Sort result by repos quantity:</span>
      <S.Select>
        <span>{sortBy}</span>
        <button type='button' onClick={() => setIsShowDroplist(prev => !prev)}>
          <UiIcon name='arrowDown' width='1rem' />
        </button>
        {isShowDroplist ? droplistContent : null}
      </S.Select>
    </S.SortBox>
  )
}

export default SortByRepos
