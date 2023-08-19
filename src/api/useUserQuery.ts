import { useQuery } from '@tanstack/react-query'

import { isEmptyObject } from '@/utils'
import useQueryParams from '@/hooks/useQueryParams'

import { initQueryParams } from '@/hooks/useQueryParams/constants'
import { SuccessResponse } from './types'

const BASE_URL = 'https://api.github.com/search/users'

const useUserQuery = () => {
  const [queryParams] = useQueryParams()
  console.log(`queryParams =>`, queryParams)

  const handleFetch = async () => {
    const queryParamsInstance = new URLSearchParams(
      isEmptyObject(queryParams) ? initQueryParams : queryParams,
    )

    const fullUrl = `${BASE_URL}?${queryParamsInstance.toString()}`

    console.log(fullUrl)

    return fetch(fullUrl).then(response =>
      response.json().catch(error => error as Error),
    )
  }

  const { data, isFetching, error } = useQuery<SuccessResponse, Error>({
    queryKey: ['users', queryParams],
    queryFn: handleFetch,
    enabled: !!queryParams.q,
  })
  console.log(`data from useUserQuery =>`, data)

  return { data, isFetching, error }
}

export default useUserQuery
