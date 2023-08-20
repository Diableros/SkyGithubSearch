import Pagination from './components/Pagination'
import ResultList from './components/ResultList'
import { Position } from '../UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'
import UiIcon from '../UiKit/UiIcon/UiIcon.tsx'

import { useSearchContext } from '@/context/searchContext.ts'
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
    <>
      <Pagination
        resultTotalCount={data?.total_count || 0}
        position={Position.Top}
      />
      <ResultList resultData={data?.items || []} />
      <Pagination
        resultTotalCount={data?.total_count || 0}
        position={Position.Bottom}
      />
    </>
  )

  const searchStatus = isFetching ? <p>Searching...</p> : <p>Not found</p>

  const searchFailContent = error ? (
    <p>Query error: {error.message}</p>
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
