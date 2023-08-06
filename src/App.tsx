import Header from './components/Header/'
import SearchForm from '@/components/SearchForm'

import * as S from '@/App.style'

function App() {
  return (
    <S.PageWrapper>
      <Header />

      <SearchForm />
    </S.PageWrapper>
  )
}

export default App
