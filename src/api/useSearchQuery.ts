import { useQuery } from '@tanstack/react-query'
import { HTTPError, SearchParamsOption } from 'ky'

import { Action, useSearchContext } from '@/context'

import { SuccessResponse } from './types'
import { ParamsFields } from './enums'

import { api } from './api'

const useSearchQuery = () => {
  const [
    {
      search,
      pagination: { currentPage, pageSize },
      sort: { value: sort },
    },
    dispatch,
  ] = useSearchContext()

  const handleQuery = async () => {
    const paramsObj: SearchParamsOption = {
      [ParamsFields.Search]: search,
      [ParamsFields.CurrentPage]: currentPage,
      [ParamsFields.PageSize]: pageSize,
    }

    if (sort) {
      paramsObj['sort'] = 'repositories'
      paramsObj[ParamsFields.Order] = sort
    }

    try {
      return await api
        .get('search/users', { searchParams: paramsObj })
        .json<SuccessResponse>()
    } catch (error) {
      const { response } = error as HTTPError
      if (response.status) throw response.status
    }
  }

  const { data, isFetching, error } = useQuery<SuccessResponse, number>({
    queryKey: ['users', search, currentPage, pageSize, sort],
    queryFn: handleQuery,
    enabled: !!search,
    onSuccess: data => {
      dispatch({
        type: Action.Pagination,
        payload: { currentPage, pageSize, totalCount: data.total_count },
      })
      dispatch({ type: Action.DisableFirstSearch })
      dispatch({ type: Action.ClearErrors })
    },
    onError: errorCode => {
      dispatch({
        type: Action.Pagination,
        payload: { pageSize, currentPage: 1 },
      })
      dispatch({ type: Action.SetError, payload: errorCode })
    },
  })

  return { data, isFetching, error }
}

export default useSearchQuery
