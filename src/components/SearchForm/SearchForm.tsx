import * as React from 'react'

import SortByRepos from './components/SortByRepos'
import UiButton from '../UiKit/UiButtonLikeComponents/UiButton'
import UiIcon from '../UiKit/UiIcon'

import { Action, useSearchContext } from '@/context'
import useSearchQuery from '@/api/useSearchQuery'

import * as TEXT from './constants'
import { TestID } from '@/enums'

import * as S from './SearchForm.style'

const SearchForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = React.useState('')
  const [{ pagination }, dispatch] = useSearchContext()

  const { isFetching } = useSearchQuery()

  const handleOnChangeInput = () => {
    const { value: inputCurrentValue } = inputRef.current
    setSearchText(inputCurrentValue)
  }

  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    dispatch({ type: Action.SearchText, payload: searchText })
    dispatch({
      type: Action.Pagination,
      payload: { ...pagination, currentPage: 1 },
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
        data-testid={TestID.SearchInput}
      />
      <S.ButtonsBox>
        <SortByRepos />
        <UiButton
          testid={TestID.SearchButton}
          title={TEXT.SEARCH_BUTTON_TITLE}
          type='submit'
          icon={<UiIcon name={isFetching ? 'loader' : 'search'} width='18' />}
          hPadding='1rem'
        />
      </S.ButtonsBox>
    </S.SearchForm>
  )
}

export default SearchForm
