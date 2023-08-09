import * as React from 'react'

import UiIcon from '@/components/UiKit/UiIcon'

import { SelectItem } from './types'

import * as S from './UiSelectButton.style'

type PropsType = {
  selectItems: SelectItem[]
}

const UiSelectButton = ({ selectItems }: PropsType) => {
  const [defaultItem] = selectItems

  const [selectedItem, setSelectedItem] =
    React.useState<SelectItem>(defaultItem)
  const [isShowDroplist, setIsShowDroplist] = React.useState<boolean>(false)

  const handleClickSelectItem = (clickedItem: SelectItem) => {
    setSelectedItem(clickedItem)
    setIsShowDroplist(false)
  }

  const droplistContent = (
    <S.SlectDropList onMouseLeave={() => setIsShowDroplist(false)}>
      {selectItems.map(selectItem =>
        selectItem !== selectedItem ? (
          <div
            key={selectItem.option}
            onClick={() => handleClickSelectItem(selectItem)}
          >
            <span>{selectItem.option}</span>
          </div>
        ) : null,
      )}
    </S.SlectDropList>
  )

  return (
    <S.SelectBox>
      <S.SelectedValue>{selectedItem.option}</S.SelectedValue>
      <S.SelectDropButton
        type='button'
        onClick={() => setIsShowDroplist(prev => !prev)}
      >
        <UiIcon name='arrowDown' width='1rem' />
      </S.SelectDropButton>
      {isShowDroplist ? droplistContent : null}
    </S.SelectBox>
  )
}

export default UiSelectButton
