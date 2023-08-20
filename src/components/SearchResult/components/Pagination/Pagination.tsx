import * as React from 'react'

import PaginationBar from './components/PaginationBar.tsx'
import { Position } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'

type PropsType = {
  children: React.ReactNode
}

const Pagination = ({ children }: PropsType) => {
  return (
    <>
      <PaginationBar position={Position.Top} />
      {children}
      <PaginationBar position={Position.Bottom} />
    </>
  )
}

export default Pagination
