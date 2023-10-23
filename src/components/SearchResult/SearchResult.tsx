import Pagination from './components/Pagination'
import ResultList from './components/ResultList'
import Skeleton from './components/Skeleton/Skeleton.tsx'
import UiIcon from '../UiKit/UiIcon/UiIcon.tsx'

import { useSearchContext } from '@/context/searchContext.ts'
import { decodeError } from './utils.ts'
import useSearchQuery from '@/api/useSearchQuery.ts'

import * as S from './SearchResult.style'

const SearchResult = () => {
  const [
    {
      isFirstSearch,
      pagination: { pageSize },
    },
  ] = useSearchContext()
  const { data, error, isFetching } = useSearchQuery()

  const beforeSearchContent = (
    <S.CoverContent>
      <S.CoverTitle>Start the Search!</S.CoverTitle>
      <UiIcon name='search' width='10rem' color='inherit' />
    </S.CoverContent>
  )

  const searchResultContent = (
    <Pagination>
      <S.SearchResultContent>
        {data ? (
          <ResultList resultData={data.items} />
        ) : (
          <Skeleton quantity={pageSize} />
        )}
      </S.SearchResultContent>
    </Pagination>
  )

  // TODO add instead of "Searching..." pagination with sceleton of result
  const searchStatus = (
    <S.CoverContent>
      {isFetching ? (
        <Pagination>
          <S.SearchResultContent>
            <Skeleton quantity={pageSize} />
          </S.SearchResultContent>
        </Pagination>
      ) : (
        <S.CoverTitle>
          {'No matches found...'}
          <UiIcon
            name={isFetching ? 'search' : 'sadFace'}
            width='10rem'
            color='inherit'
          />
        </S.CoverTitle>
      )}
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
