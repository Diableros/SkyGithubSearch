import { QueryParamsFields } from './enums'

export type QueryParams = {
  [key in QueryParamsFields]?: string
}
