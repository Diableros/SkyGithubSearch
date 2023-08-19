import * as React from 'react'

import { QueryParams, SetQueryParams } from './types'

export const useQueryParams = (): [QueryParams, SetQueryParams] => {
  const [queryParams, setQueryParams] = React.useState<QueryParams>({})

  const updateQueryParams = React.useCallback((newQueryParams: QueryParams) => {
    const searchParams = new URLSearchParams(window.location.search)

    for (const [key, value] of Object.entries(newQueryParams)) {
      if (value) {
        searchParams.set(key, value)
      } else {
        searchParams.delete(key)
      }
    }

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?${searchParams.toString()}`,
    )
    setQueryParams(newQueryParams)
  }, [])

  React.useEffect(() => {
    const actualQueryParams = new URLSearchParams(window.location.search)
    const newQueryParams: QueryParams = {}

    for (const [key, value] of actualQueryParams.entries()) {
      newQueryParams[key as keyof QueryParams] = value
    }

    setQueryParams(newQueryParams)
  }, [window.location.search])

  return [queryParams, updateQueryParams]
}
