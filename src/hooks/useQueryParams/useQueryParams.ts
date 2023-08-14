import * as React from 'react'

import { isObjEqual } from './utils'

import { QueryParams } from './types'

type SetQueryParams = (options: QueryParams) => void

export const useQueryParams = (): [QueryParams, SetQueryParams] => {
  const [queryParams, setQueryParams] = React.useState<URLSearchParams>(
    new URLSearchParams(window.document.location.search),
  )

  const getQueryParamsObj = () => {
    const queryParamsObj: QueryParams = {}
    for (const [key, value] of queryParams) {
      queryParamsObj[key as keyof QueryParams] = value
    }
    return queryParamsObj
  }

  const updateQueryParamsOptions = (options: QueryParams) => {
    const updatedQueryParams = new URLSearchParams(queryParams)

    for (const [key, value] of Object.entries(options)) {
      if (value) {
        updatedQueryParams.set(key, value)
      } else {
        updatedQueryParams.delete(key)
      }
    }

    setQueryParams(updatedQueryParams)
  }

  const handlePopState = () => {}

  React.useEffect(() => {
    const currentParams = new URLSearchParams(window.document.location.search)

    if (!isObjEqual(queryParams, currentParams)) {
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`
      window.history.pushState({}, '', newUrl)
    }
  }, [queryParams])

  React.useEffect(() => {
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return [getQueryParamsObj(), updateQueryParamsOptions]
}
