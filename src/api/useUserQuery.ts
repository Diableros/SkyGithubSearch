import { useQuery } from '@tanstack/react-query'
import { SearchParamsOption } from 'ky'

import { Action, useSearchContext } from '@/context'

import { SuccessResponse } from './types'
import { ParamsFields } from './enums'

import { api } from './api'

const useUserQuery = () => {
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
      paramsObj[ParamsFields.Sort] = sort
    }
    try {
      return await api
        .get('search/users', { searchParams: paramsObj })
        .json<SuccessResponse>()
    } catch (error) {
      const { message } = error as Error
      throw new Error(message)
    }
  }

  const { data, isFetching, error } = useQuery<SuccessResponse, Error>({
    queryKey: ['users', search, currentPage, pageSize, sort],
    queryFn: handleQuery,
    enabled: !!search,
    onSuccess: () => {
      dispatch({ type: Action.DisableFirstSearch })
      dispatch({ type: Action.ClearErrors })
    },
    onError: ({ message }) => {
      dispatch({ type: Action.SetError, payload: message })
    },
  })

  return { data, isFetching, error }
}

export default useUserQuery
