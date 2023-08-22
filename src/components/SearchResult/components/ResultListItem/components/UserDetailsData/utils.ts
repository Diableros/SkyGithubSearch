import { UserDetails } from '@/api/types'

import { showUserDetailFields } from './constants'

export const getFilteredUserData = (userDetails: UserDetails) => {
  return (
    userDetails &&
    Object.keys(userDetails).reduce<
      Record<string, string | number | boolean | null>
    >((filteredFields, fieldKey) => {
      if (
        showUserDetailFields.includes(fieldKey as keyof UserDetails) &&
        userDetails[fieldKey as keyof UserDetails]
      ) {
        filteredFields[fieldKey] = userDetails[fieldKey as keyof UserDetails]
      }
      return filteredFields
    }, {})
  )
}

export const dateFormat = (date: string) => {
  console.log(date)
  return 'date'
}
