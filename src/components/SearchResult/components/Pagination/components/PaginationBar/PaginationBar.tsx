import * as React from 'react'

import UiButton from '@/components/UiKit/UiButtonLikeComponents/UiButton'
import UiSelectButton from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums'
import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'
import UiIcon from '@/components/UiKit/UiIcon'

import { Action, PaginationData, SearchAction } from '@/context'
import { filterPageButtons } from '../../utils'

import { MAX_GITHUB_RESULT, pageSizeSelectorOptions } from './constants'

import * as S from './PaginationBar.style'

type PaginationBarType = {
  pagination: PaginationData
  dispatch: React.Dispatch<SearchAction>
  position: Position
}

const PaginationBar = ({
  pagination: { totalCount, currentPage, pageSize },
  dispatch,
  position,
}: PaginationBarType) => {
  const fullPageButtons = Array.from({
    length: Math.ceil(
      (totalCount < MAX_GITHUB_RESULT ? totalCount : MAX_GITHUB_RESULT) /
        pageSize,
    ),
  }).map((_, index) => index + 1)

  const filteredPageButtons = filterPageButtons(fullPageButtons, currentPage)

  const onPageClick = (settedPage: number) => {
    if (settedPage < 0 && settedPage > fullPageButtons.length) return

    dispatch({
      type: Action.Pagination,
      payload: { totalCount, currentPage: settedPage, pageSize },
    })
  }

  const onPageSizeChange = ({ value }: SelectOption) => {
    const newCurrentPage = Math.round(
      ((currentPage - 1) * pageSize) / Number(value) + 1,
    )

    dispatch({
      type: Action.Pagination,
      payload: {
        currentPage: newCurrentPage,
        pageSize: Number(value),
        totalCount,
      },
    })
  }

  return (
    <>
      <S.PaginationWrapper>
        <UiButton
          title={<UiIcon name='arrowLeft' width='1rem' />}
          hPadding='0.5rem'
          onClick={() => onPageClick(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {filteredPageButtons.map(pageNumber => (
          <UiButton
            key={pageNumber}
            title={pageNumber}
            hPadding='0.5rem'
            onClick={() => onPageClick(pageNumber)}
            isActive={pageNumber === currentPage}
            fontSize='0.75rem'
          />
        ))}

        <UiButton
          title={<UiIcon name='arrowRight' width='1rem' />}
          hPadding='0.5rem'
          onClick={() => onPageClick(currentPage + 1)}
          disabled={currentPage === fullPageButtons.length}
        />

        <UiSelectButton
          selectOptions={pageSizeSelectorOptions}
          selectedValue={pageSizeSelectorOptions.find(
            option => option.value === String(pageSize),
          )}
          onChange={onPageSizeChange}
          width='4rem'
          $fontSize='0.75rem'
          position={position}
        />
      </S.PaginationWrapper>
    </>
  )
}

export default PaginationBar
