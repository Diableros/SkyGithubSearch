import { useSearchContext } from '@/context'

import * as S from './SearchState.style'

const SearchState = () => {
  const [state] = useSearchContext()

  return <S.SearchState>{`SHOW ONLY IN DEV MODE:\n${JSON.stringify(state, null, 2)}`}</S.SearchState>
}

export default SearchState
