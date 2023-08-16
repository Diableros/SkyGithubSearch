import { QueryParamsFields } from './enums'

export type QueryParams = {
  [key in QueryParamsFields]?: string
}

export type SetQueryParams = (newQueryParams: QueryParams) => void
