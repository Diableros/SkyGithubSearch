import { QueryParamsFields } from './enums'

export type QueryParams = {
  [QueryParamsFields.Search]?: string
  [QueryParamsFields.CurrentPage]?: string
  [QueryParamsFields.PageSize]?: string
}
