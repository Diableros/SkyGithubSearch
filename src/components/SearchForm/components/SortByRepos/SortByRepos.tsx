import * as React from 'react'

import { SortBy } from './enums'

import * as S from './SortByRepos.style'

import arrowDown from '@/assets/icons/arrowDown.svg'

const SortByRepos = () => {
  const [sortBy, setSortBy] = React.useState<SortBy>(SortBy.Default)
  const [isShowSelect, setIsShowSelect] = React.useState<boolean>(false)

  const handleClickSelectItem = (clickedItem: SortBy) => {
    setSortBy(clickedItem)
    setIsShowSelect(false)
  }

  const selectContent = (
    <S.DropList>
      {Object.values(SortBy).map(selectItem =>
        selectItem !== sortBy ? (
          <div
            key={selectItem}
            onClick={() => handleClickSelectItem(selectItem)}
          >
            {selectItem}
          </div>
        ) : null,
      )}
    </S.DropList>
  )

  return (
    <S.SortBox>
      <span>Sort result by repos number:</span>
      <S.Select>
        <span>{sortBy}</span>
        <button type='button' onClick={() => setIsShowSelect(prev => !prev)}>
          <img src={arrowDown} width='16px' />
        </button>
        {isShowSelect ? selectContent : null}
      </S.Select>
    </S.SortBox>
  )
}

export default SortByRepos
