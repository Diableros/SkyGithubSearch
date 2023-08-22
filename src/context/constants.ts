import { sortByOptions } from '@/components/SearchForm/components/SortByRepos/constants'

import { SearchState } from './types'

export const INIT_SEARCH_STATE: SearchState = {
  search: '',
  pagination: { currentPage: 1, pageSize: 10 },
  sort: sortByOptions[0],
  errors: [],
  isFirstSearch: true,
}
