import * as React from 'react'

import Pagination from './components/Pagination'
import ResultList from './components/ResultList'
import { Position } from '../UiKit/UiButtonLikeComponents/UiSelectButton/enums.ts'

import { User } from '@/api/types.ts'
import useUserQuery from '@/api/useUserQuery.ts'

import * as S from './SearchResult.style'

const SearchResult = () => {
  const [users, setUsers] = React.useState<User[]>([])
  const { data, error } = useUserQuery()

  // const beforeSearchContent = (
  //   <S.CoverContent>
  //     <S.CoverTitle>Start the Search!</S.CoverTitle>
  //     <UiIcon name='search' width='10rem' color='inherit' />
  //   </S.CoverContent>
  // )

  const searchSuccessContent = (
    <>
      <Pagination
        resultTotalCount={data?.total_count || 0}
        position={Position.Top}
      />
      <ResultList resultData={users || []} />
      <Pagination
        resultTotalCount={data?.total_count || 0}
        position={Position.Bottom}
      />
    </>
  )

  const searchFailContent = <p>Not found</p>

  const searchResultContent = data?.total_count
    ? searchSuccessContent
    : searchFailContent

  const searchQueryErrorContent = <p>Query error</p>

  React.useEffect(() => {
    if (data) {
      setUsers(data.items)
    }
    console.log(`data =>`, data)
  }, [data])

  return (
    <S.SearchResultWrapper>
      {!error ? searchResultContent : searchQueryErrorContent}
    </S.SearchResultWrapper>
  )
}

export default SearchResult
