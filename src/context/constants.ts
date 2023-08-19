import { SortByReposOptions } from '@/components/SearchForm/components/SortByRepos/enums'

import { SearchState } from './types'

export const INIT_SEARCH_STATE: SearchState = {
  search: '',
  pagination: { currentPage: 1, pageSize: 10 },
  sort: SortByReposOptions.Default,
  errors: [],
}
