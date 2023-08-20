import * as React from 'react'

import { INIT_SEARCH_STATE } from './constants'
import { UserContext } from './types'

export const Context = React.createContext<UserContext>([
  INIT_SEARCH_STATE,
  () => null,
])
export const useSearchContext = () => {
  const searchContext = React.useContext(Context)
  if (!searchContext) {
    throw new Error('useSearchContext can be accessed only under Providers')
  }
  return searchContext
}
