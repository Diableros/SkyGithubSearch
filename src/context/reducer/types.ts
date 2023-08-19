import { SortByReposOptions } from '@/components/SearchForm/components/SortByRepos/enums'

import { Pagination, SearchState } from '../types'
import { Action } from './enums'

export type SearchAction =
  | {
      type: Action.SearchText
      payload: string
    }
  | {
      type: Action.Pagination
      payload: Pagination
    }
  | {
      type: Action.Sort
      payload: SortByReposOptions
    }
  | {
      type: Action.SetError
      payload: string
    }
  | {
      type: Action.ClearErrors
      payload: null
    }

export type SearchReducer = (
  state: SearchState,
  action: SearchAction,
) => SearchState
