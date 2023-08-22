import { SearchReducer } from './types'
import { Action } from './enums'

export const searhReducer: SearchReducer = (state, action) => {
  switch (action.type) {
    case Action.SearchText: {
      return {
        ...state,
        search: action.payload,
      }
    }

    case Action.Pagination: {
      return {
        ...state,
        pagination: action.payload,
      }
    }

    case Action.Order: {
      return {
        ...state,
        sort: action.payload,
      }
    }

    case Action.SetError: {
      const error = action.payload
      const errors = state.errors
      if (!errors.includes(error)) errors.push(error)

      return {
        ...state,
        errors,
      }
    }

    case Action.ClearErrors: {
      return {
        ...state,
        errors: [],
      }
    }

    case Action.DisableFirstSearch: {
      return {
        ...state,
        isFirstSearch: false,
      }
    }

    default: {
      return state
    }
  }
}
