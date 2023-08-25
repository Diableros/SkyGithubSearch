import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'

import { UserDetails } from './types'

import { api } from './api'

const useUserDetails = () => {
  return useMutation({
    mutationKey: ['user details'],
    mutationFn: (login: string) => {
      try {
        return api().get(`users/${login}`).json<UserDetails>()
      } catch (error) {
        const { response } = error as HTTPError
        if (response.status) throw response.status
      }
    },
  })
}

export default useUserDetails
