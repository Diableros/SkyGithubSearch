import { SelectOption } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { PaginationData, SearchState } from '../types'
import { Action } from './enums'

export type SearchAction =
  | {
      type: Action.SearchText
      payload: string
    }
  | {
      type: Action.Pagination
      payload: PaginationData
    }
  | {
      type: Action.Sort
      payload: SelectOption
    }
  | {
      type: Action.SetError
      payload: string
    }
  | {
      type: Action.ClearErrors
      payload?: null
    }
  | {
      type: Action.DisableFirstSearch
      payload?: null
    }

export type SearchReducer = (
  state: SearchState,
  action: SearchAction,
) => SearchState
