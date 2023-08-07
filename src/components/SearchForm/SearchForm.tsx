import * as React from 'react'

import SortByRepos from './components/SortByRepos'

import * as TEXT from './constants'

import * as S from './SearchForm.style'

import search from '@/assets/icons/search.svg'

const SearchForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = React.useState('')

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearchText(value)
  }

  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    console.log(`event =>`, event)
  }

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <S.SearchForm onSubmit={handleOnSumbit}>
      <input
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
        ref={inputRef}
      />
      <S.ButtonsBox>
        <SortByRepos />
        <button type='submit'>
          <img src={search} width={24} />
          <span>{TEXT.SEARCH_BUTTON_TITLE}</span>
        </button>
      </S.ButtonsBox>
    </S.SearchForm>
  )
}

export default SearchForm
