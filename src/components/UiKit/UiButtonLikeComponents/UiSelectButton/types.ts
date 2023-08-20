import { SortByReposValues } from '@/components/SearchForm/components/SortByRepos/enums'

export type SelectOption = {
  title: string
  value: string | null | SortByReposValues
}

export type SelectOptions = SelectOption[]
