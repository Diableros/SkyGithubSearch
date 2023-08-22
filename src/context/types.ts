import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { SearchAction } from './reducer/types'

export type PaginationData = {
  currentPage: number
  pageSize: number
  totalCount?: number
}

export type SearchState = {
  search: string
  pagination: PaginationData
  sort: SelectOption
  errors: number[]
  isFirstSearch: boolean
}

export type UserContext = [SearchState, React.Dispatch<SearchAction>]
