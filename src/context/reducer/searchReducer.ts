import { SearchReducer } from './types'
import { Action } from './enums'

export const userReducer: SearchReducer = (state, action) => {
  switch (action.type) {
    case Action.SearchText:
      return {
        ...state,
        search: action.payload,
      }

    case Action.Pagination:
      return {
        ...state,
        pagination: action.payload,
      }

    case Action.Sort:
      return {
        ...state,
        sort: action.payload,
      }

    case Action.SetError: {
      const errors = state.errors
      errors.push(action.payload)

      return {
        ...state,
        errors,
      }
    }

    case Action.ClearErrors:
      return {
        ...state,
        errors: [],
      }

    default:
      return state
  }
}
