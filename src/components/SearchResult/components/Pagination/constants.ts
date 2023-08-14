import { SelectOptions } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { QueryParamsFields } from '../../../../hooks/useQueryParams/enums'

import { QueryParams } from './types'

export const paginationSelectOptions: SelectOptions = [
  {
    title: '10',
    value: '10',
  },
  {
    title: '20',
    value: '20',
  },
  {
    title: '50',
    value: '50',
  },
  {
    title: '100',
    value: '100',
  },
]

export const paginationInitOptions: QueryParams = {
  [QueryParamsFields.CurrentPage]: '1',
  [QueryParamsFields.PageSize]: paginationSelectOptions[0].value,
}