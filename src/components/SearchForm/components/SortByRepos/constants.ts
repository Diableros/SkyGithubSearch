import { SelectOptions } from '@/components/UiKit/UiButtonLikeComponents/UiSelectButton/types'

import { SortByReposValues } from './enums'

export const sortByOptions: SelectOptions = [
  {
    title: 'Default',
    value: SortByReposValues.Default,
  },
  { title: 'Ascending', value: SortByReposValues.Ascending },
  { title: 'Descending', value: SortByReposValues.Descending },
]
