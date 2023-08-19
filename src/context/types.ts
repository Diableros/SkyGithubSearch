import { SortByReposOptions } from '@/components/SearchForm/components/SortByRepos/enums'

import { SearchAction } from './reducer/types'

export type Pagination = {
  currentPage: number
  pageSize: number
  totalCount?: number
}

export type SearchState = {
  search: string
  pagination: Pagination
  sort: SortByReposOptions
  errors: string[]
}

export type UserContext = [SearchState, React.Dispatch<SearchAction>]
