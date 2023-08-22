import Header from './components/Header/'
import ScrollUpButton from './components/ScrollUpButton'
import SearchResult from './components/SearchResult'
import SearchState from './components/SearchState'
import SearchForm from '@/components/SearchForm'

function App() {
  return (
    <>
      <Header />
      <SearchForm />
      <SearchResult />
      <ScrollUpButton />
      {import.meta.env.MODE === 'development' ? <SearchState /> : null}
    </>
  )
}

export default App
