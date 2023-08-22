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

export const dateFormat = (rawDate: string) => {
  const date = new Date(rawDate)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  // const hours = String(date.getHours()).padStart(2, '0')
  // const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}.${month}.${day}`
}
