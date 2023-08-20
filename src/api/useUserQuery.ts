import { useQuery } from '@tanstack/react-query'

import { Action, useSearchContext } from '@/context'

import { SuccessResponse } from './types'

const BASE_URL = 'https://api.github.com/search/users'

const useUserQuery = () => {
  const [{ search }, dispatch] = useSearchContext()

  const handleFetch = async () => {
    const fullUrl = `${BASE_URL}?`

    return fetch(fullUrl).then(response =>
      response.json().catch(error => {
        const { message } = error as Error

        dispatch({ type: Action.SetError, payload: message })
      }),
    )
  }

  const { data, isFetching, error } = useQuery<SuccessResponse, Error>({
    queryKey: ['users'],
    queryFn: handleFetch,
    enabled: !!search,
    onSuccess: () => dispatch({ type: Action.DisableFirstSearch }),
  })

  return { data, isFetching, error }
}

export default useUserQuery
