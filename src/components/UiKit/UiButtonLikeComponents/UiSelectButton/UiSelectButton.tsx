import * as React from 'react'

import UiIcon from '@/components/UiKit/UiIcon'

import { SelectOption, SelectOptions } from './types'
import { Position } from './enums'

import * as S from './UiSelectButton.style'

type PropsType = {
  onChange: (value: SelectOption) => void
  selectOptions: SelectOptions
  selectedValue?: SelectOption
  position?: Position
  width?: string
}

const UiSelectButton = ({
  selectedValue,
  onChange,
  selectOptions,
  position = Position.Top,
  width = '5rem',
}: PropsType) => {
  const dropListRef = React.useRef<HTMLDivElement | null>(null)

  const [defaultItem] = selectOptions

  const [selectedOption, setSelectedOption] = React.useState<SelectOption>(
    selectedValue.value ? selectedValue : defaultItem,
  )
  const [isShowDroplist, setIsShowDroplist] = React.useState<boolean>(false)

  const handleClickSelectItem = (clickedItem: SelectOption) => {
    setSelectedOption(clickedItem)
    onChange(clickedItem)
    setIsShowDroplist(false)
  }

  const DroplistContent = ({ isShow = false }: { isShow?: boolean }) => {
    const dropListElement = dropListRef.current

    let dropListShift: number

    if (position === Position.Bottom && dropListElement) {
      dropListShift = dropListElement.offsetHeight
    }

    return (
      <S.SelectDropList
        isShow={isShow}
        ref={dropListRef}
        onMouseLeave={() => setIsShowDroplist(false)}
        dropListShift={dropListShift}
      >
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
      </S.SelectDropList>
    )
  }

  return (
    <S.SelectBox>
      <S.SelectedValue width={width}>{selectedOption.title}</S.SelectedValue>
      <S.SelectDropButton
        type='button'
        onClick={() => setIsShowDroplist(prev => !prev)}
      >
        <UiIcon name='arrowDown' width='1rem' />
      </S.SelectDropButton>
      {isShowDroplist ? <DroplistContent isShow /> : <DroplistContent />}
    </S.SelectBox>
  )
}

export default UiSelectButton
