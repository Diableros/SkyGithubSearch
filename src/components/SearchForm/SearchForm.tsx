import * as React from 'react'

import SortByRepos from './components/SortByRepos'
import UiButton from '../UiKit/UiButtonLikeComponents/UiButton'
import UiIcon from '../UiKit/UiIcon'

import { isEmptyObject } from '@/utils'
import useUserQuery from '@/api/useUserQuery'
import useQueryParams from '@/hooks/useQueryParams'
import { QueryParamsFields } from '@/hooks/useQueryParams/enums'

import * as TEXT from './constants'
import { initQueryParams } from '@/hooks/useQueryParams/constants'

import * as S from './SearchForm.style'

const SearchForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = React.useState('')
  const [queryParams, setQueryParams] = useQueryParams()

  const { isFetching } = useUserQuery()

  const handleOnChangeInput = () => {
    const { value: inputCurrentValue } = inputRef.current
    setSearchText(inputCurrentValue)
  }

  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    setQueryParams({
      ...(isEmptyObject(queryParams) ? initQueryParams : queryParams),
      [QueryParamsFields.Search]: searchText,
    })
  }

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <S.SearchForm onSubmit={handleOnSumbit}>
      <input
        ref={inputRef}
        placeholder={TEXT.INPUT_PLACEHOLDER}
        type='text'
        minLength={1}
        maxLength={39}
        size={39}
        value={searchText}
        required
        pattern={TEXT.INPUT_PATTERN_REGEXP}
        title={TEXT.INVALID_VALUE_MSG}
        onChange={handleOnChangeInput}
      />
      <S.ButtonsBox>
        <SortByRepos />
        <UiButton
          title={TEXT.SEARCH_BUTTON_TITLE}
          type='submit'
          icon={
            isFetching ? (
              <UiIcon name='loader' width='18' />
            ) : (
              <UiIcon name='search' width='18' />
            )
          }
        />
      </S.ButtonsBox>
    </S.SearchForm>
  )
}

export default SearchForm
