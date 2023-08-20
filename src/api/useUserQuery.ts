import { useQuery } from '@tanstack/react-query'

import { SuccessResponse } from './types'

const BASE_URL = 'https://api.github.com/search/users'

const useUserQuery = () => {
  const handleFetch = async () => {
    const fullUrl = `${BASE_URL}?`

    return fetch(fullUrl).then(response =>
      response.json().catch(error => error as Error),
    )
  }

  const { data, isFetching, error } = useQuery<SuccessResponse, Error>({
    queryKey: ['users'],
    queryFn: handleFetch,
    enabled: true,
  })

  return { data, isFetching, error }
}

export default useUserQuery
