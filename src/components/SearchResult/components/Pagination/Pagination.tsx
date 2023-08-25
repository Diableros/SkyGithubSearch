import * as React from 'react'
import { Pagination } from 'antd'
import { PaginationProps } from 'antd'

import UiButton from '@/components/UiKit/UiButtonLikeComponents/UiButton'
import UiIcon from '@/components/UiKit/UiIcon'
import './Pagination.scss'

import { Action, useSearchContext } from '@/context'

type PropsType = {
  children: React.ReactNode
}

const MAX_GITHUB_RESULT = 1000

const PaginationBar = ({ children }: PropsType) => {
  const [
    {
      pagination: { totalCount, currentPage, pageSize },
    },
    dispatch,
  ] = useSearchContext()

  const onChange: PaginationProps['onChange'] = (currentPage, pageSize) => {
    dispatch({
      type: Action.Pagination,
      payload: { totalCount, currentPage, pageSize },
    })
  }

  const itemRender: PaginationProps['itemRender'] = (currentPage, type) => {
    switch (type) {
      case 'page': {
        return (
          <UiButton
            title={currentPage}
            type='button'
            hPadding='0.5rem'
            fontSize='11px'
          />
        )
      }
      case 'prev': {
        return (
          <UiButton
            title={<UiIcon name='arrowLeft' width='16px' />}
            type='button'
            hPadding='4px'
          />
        )
      }
      case 'next': {
        return (
          <UiButton
            title={<UiIcon name='arrowRight' width='16px' />}
            type='button'
            hPadding='4px'
          />
        )
      }

      default:
        return null
    }
  }

  return (
    <>
      <Pagination
        className='pagination'
        size='small'
        total={totalCount < MAX_GITHUB_RESULT ? totalCount : MAX_GITHUB_RESULT}
        current={currentPage}
        pageSize={pageSize}
        onChange={onChange}
        itemRender={itemRender}
        showSizeChanger
      />

      {children}
      <Pagination
        className='pagination'
        size='small'
        total={totalCount < MAX_GITHUB_RESULT ? totalCount : MAX_GITHUB_RESULT}
        current={currentPage}
        pageSize={pageSize}
        onChange={onChange}
        itemRender={itemRender}
        showSizeChanger
      />
    </>
  )
}

export default PaginationBar
