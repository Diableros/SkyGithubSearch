import * as React from 'react'

import { Context, SearchReducer, searhReducer } from '@/context'

import { INIT_SEARCH_STATE } from '@/context/constants'

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const searchContext = React.useReducer<SearchReducer>(
    searhReducer,
    INIT_SEARCH_STATE,
  )

  return <Context.Provider value={searchContext}>{children}</Context.Provider>
}

export default SearchContextProvider
