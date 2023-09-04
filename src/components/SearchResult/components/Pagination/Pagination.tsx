import * as React from 'react'

import PaginationBar from './components/PaginationBar'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums'

import { useSearchContext } from '@/context'

type PropsType = {
  children: React.ReactNode
}

const Pagination = ({ children }: PropsType) => {
  const [{ pagination }, dispatch] = useSearchContext()

  return (
    <>
      <PaginationBar
        pagination={pagination}
        dispatch={dispatch}
        position={Position.Top}
      />
      {children}
      <PaginationBar
        pagination={pagination}
        dispatch={dispatch}
        position={Position.Bottom}
      />
    </>
  )
}

export default Pagination
