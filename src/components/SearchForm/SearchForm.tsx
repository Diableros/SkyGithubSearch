import * as React from 'react'

import './SearchForm.scss'

import {
  CLEAR_BUTTON_TITLE,
  INPUT_PATTERN_REGEXP,
  INPUT_PLACEHOLDER,
  IVALID_VALUE_MSG,
  SEARCH_BUTTON_TITLE,
} from './constants'

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

    console.log(searchText)
  }

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form className='search-form' onSubmit={handleOnSumbit}>
      <input
        placeholder={INPUT_PLACEHOLDER}
        className='search-form__input'
        type='text'
        minLength={1}
        maxLength={39}
        size={39}
        value={searchText}
        required
        pattern={INPUT_PATTERN_REGEXP}
        title={IVALID_VALUE_MSG}
        onChange={handleOnChangeInput}
        ref={inputRef}
      />
      <div className='search-form__buttons-box'>
        <button
          className='search-form__button'
          type='reset'
          onClick={() => setSearchText('')}
        >
          <span>{CLEAR_BUTTON_TITLE}</span>
        </button>
        <button className='search-form__button' type='submit'>
          <div>
            <img src={search} width={24} />
          </div>
          <span>{SEARCH_BUTTON_TITLE}</span>
        </button>
      </div>
    </form>
  )
}

export default SearchForm
