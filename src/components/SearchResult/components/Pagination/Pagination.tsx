import * as React from 'react'

import UiButton from '@/components/UiKit/UiButtonLikeComponents/UiButton'
import UiIcon from '@/components/UiKit/UiIcon'

// import UiIcon from '@/components/UiKit/UiIcon'
import { Action, useSearchContext } from '@/context'

import * as S from './Pagination.style'

type PropsType = {
  children: React.ReactNode
}

const MAX_GITHUB_RESULT = 1000

const Pagination = ({ children }: PropsType) => {
  const [
    {
      pagination: { totalCount, currentPage, pageSize },
    },
    dispatch,
  ] = useSearchContext()

  const pagination = () => {
    const fullPageButtons = Array.from({
      length: Math.ceil(
        totalCount < MAX_GITHUB_RESULT
          ? totalCount
          : MAX_GITHUB_RESULT / pageSize,
      ),
    }).map((_, index) => index + 1)

    const filteredPageButtons = fullPageButtons.filter(
      (pageNumber, _, array) =>
        pageNumber === 1 ||
        pageNumber === array.length ||
        (pageNumber >= currentPage - 3 && pageNumber <= currentPage + 3),
    )

    const onPageClick = (settedPage: number) => {
      if (settedPage < 0 && settedPage > fullPageButtons.length) return

      dispatch({
        type: Action.Pagination,
        payload: { totalCount, currentPage: settedPage, pageSize },
      })
    }

    return (
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
      </S.PaginationWrapper>
    )
  }

  return (
    <>
      {pagination()}
      {children}
      {pagination()}
    </>
  )
}

export default Pagination
