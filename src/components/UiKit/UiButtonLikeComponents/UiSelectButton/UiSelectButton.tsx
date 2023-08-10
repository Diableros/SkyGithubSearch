import * as React from 'react'

import UiIcon from '@/components/UiKit/UiIcon'

import { SelectOption, SelectOptions } from './types'

import * as S from './UiSelectButton.style'

type PropsType = {
  selectOptions: SelectOptions
}

const UiSelectButton = ({ selectOptions }: PropsType) => {
  const [defaultItem] = selectOptions

  const [selectedOption, setSelectedOption] =
    React.useState<SelectOption>(defaultItem)
  const [isShowDroplist, setIsShowDroplist] = React.useState<boolean>(false)

  const handleClickSelectItem = (clickedItem: SelectOption) => {
    setSelectedOption(clickedItem)
    setIsShowDroplist(false)
  }

  const droplistContent = (
    <S.SlectDropList onMouseLeave={() => setIsShowDroplist(false)}>
      {selectOptions.map(selectOption =>
        selectOption !== selectedOption ? (
          <div
            key={selectOption.title}
            onClick={() => handleClickSelectItem(selectOption)}
          >
            <span>{selectOption.title}</span>
          </div>
        ) : null,
      )}
    </S.SlectDropList>
  )

  return (
    <S.SelectBox>
      <S.SelectedValue>{selectedOption.title}</S.SelectedValue>
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
