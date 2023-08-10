import Pagination from './components/Pagination'
import ResultList from './components/ResultList'
import { Position } from '../UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'

// import UiIcon from '../UiIcon'
import * as S from './SearchResult.style'

import { mockData } from './mockData.ts'

const SearchResult = () => {
  const error = ''
  const { items: users, total_count: resultTotalCount } = mockData

  // const beforeSearchContent = (
  //   <S.CoverContent>
  //     <S.CoverTitle>Start the Search!</S.CoverTitle>
  //     <UiIcon name='search' width='10rem' color='inherit' />
  //   </S.CoverContent>
  // )

  const searchSuccessContent = (
    <>
      <Pagination resultTotalCount={resultTotalCount} position={Position.Top} />
      <ResultList resultData={users} />
      <Pagination
        resultTotalCount={resultTotalCount}
        position={Position.Bottom}
      />
    </>
  )

  const searchFailContent = <p>Not found</p>

  const searchResultContent = resultTotalCount
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
