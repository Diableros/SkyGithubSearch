import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { SearchAction } from './reducer/types'

export type Pagination = {
  currentPage: number
  pageSize: number
  totalCount?: number
}

export type SearchState = {
  search: string
  pagination: Pagination
  sort: SelectOption
  errors: string[]
  isFirstSearch: boolean
}

export type UserContext = [SearchState, React.Dispatch<SearchAction>]
