import Pagination from './components/Pagination'
import ResultList from './components/ResultList'

// import UiIcon from '../UiIcon'
import * as S from './SearchResult.style'

import { mockData } from './mockData.ts'

const SearchResult = () => {
  const error = ''
  const { items: users, total_count: resultCount } = mockData

  // const beforeSearchContent = (
  //   <S.CoverContent>
  //     <S.CoverTitle>Start the Search!</S.CoverTitle>
  //     <UiIcon name='search' width='10rem' color='inherit' />
  //   </S.CoverContent>
  // )

  const searchSuccessContent = (
    <>
      <Pagination />
      <ResultList resultData={users} />
      <Pagination />
    </>
  )

  const searchFailContent = <p>Not found</p>

  const searchResultContent = resultCount
    ? searchSuccessContent
    : searchFailContent

  const searchQueryErrorContent = <p>Query error</p>

  return (
    <S.SearchResultWrapper>
      {!error ? searchResultContent : searchQueryErrorContent}
    </S.SearchResultWrapper>
  )
}

export default SearchResult
