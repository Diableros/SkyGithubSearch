import { errorsMessages } from './constants'

export const decodeError = (errorCode: number): string => {
  if (errorCode in errorsMessages) {
    return errorsMessages[errorCode]
  } else if (errorCode > 400 && errorCode < 500) {
    return errorsMessages[499]
  } else if (errorCode > 500 && errorCode < 599) {
    return errorsMessages[599]
  } else {
    return errorsMessages[0]
  }
}
