import Pagination from './components/Pagination'
import ResultList from './components/ResultList'
import UiIcon from '../UiKit/UiIcon/UiIcon.tsx'

import { useSearchContext } from '@/context/searchContext.ts'
import { decodeError } from './utils.ts'
import useUserQuery from '@/api/useUserQuery.ts'

import * as S from './SearchResult.style'

const SearchResult = () => {
  const [{ isFirstSearch }] = useSearchContext()
  const { data, error, isFetching } = useUserQuery()

  const beforeSearchContent = (
    <S.CoverContent>
      <S.CoverTitle>Start the Search!</S.CoverTitle>
      <UiIcon name='search' width='10rem' color='inherit' />
    </S.CoverContent>
  )

  const searchResultContent = (
    <Pagination>
      <ResultList resultData={data?.items || []} />
    </Pagination>
  )

  const searchStatus = (
    <S.CoverContent>
      <S.CoverTitle>
        {isFetching ? 'Searching...' : 'No matches found...'}
      </S.CoverTitle>
      <UiIcon
        name={isFetching ? 'search' : 'sadFace'}
        width='10rem'
        color='inherit'
      />
    </S.CoverContent>
  )

  const searchFailContent = error ? (
    <S.CoverContent>
      <S.CoverErrorText>{decodeError(error)}</S.CoverErrorText>
      <UiIcon name='sadFace' width='10rem' color='inherit' />
    </S.CoverContent>
  ) : (
    searchStatus
  )

  const searchResult = data?.total_count
    ? searchResultContent
    : searchFailContent

  return (
    <S.SearchResultWrapper>
      {isFirstSearch ? beforeSearchContent : searchResult}
    </S.SearchResultWrapper>
  )
}

export default SearchResult
