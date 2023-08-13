import * as React from 'react'

import { QueryParamsFields } from '@/components/SearchResult/components/Pagination/enums'

type QueryParams = {
  [QueryParamsFields.Search]?: string
  [QueryParamsFields.CurrentPage]?: string
  [QueryParamsFields.PageSize]?: string
}

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
      updatedQueryParams.set(key, value)
    }

    setQueryParams(updatedQueryParams)
  }

  React.useEffect(() => {
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`
    window.history.pushState({}, '', newUrl)
  }, [queryParams])

  return [getQueryParamsObj(), updateQueryParamsOptions]
}
