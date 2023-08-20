import { ErrorsMessages } from './types'

export const errorsMessages: ErrorsMessages = {
  403: 'Requests limit exceeded. Try again in a few minutes.',
  404: 'Page not found.',
  500: 'Internal server error. Restart the app.',
  499: 'Unknown client request error.',
  599: 'Unknown server error.',
  0: 'Absolutely unknown error.',
}
