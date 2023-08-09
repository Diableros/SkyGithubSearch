import * as React from 'react'

import SortByRepos from './components/SortByRepos'
import UiIcon from '../UiKit/UiIcon'

import * as TEXT from './constants'

import * as S from './SearchForm.style'

const SearchForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = React.useState('')

  const handleOnChangeInput = () => {
    const { value: inputCurrentValue } = inputRef.current
    setSearchText(inputCurrentValue)
  }

  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    console.log(searchText)
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
        <button type='submit'>
          <UiIcon name='search' width='18px' />
          <span>{TEXT.SEARCH_BUTTON_TITLE}</span>
        </button>
      </S.ButtonsBox>
    </S.SearchForm>
  )
}

export default SearchForm
