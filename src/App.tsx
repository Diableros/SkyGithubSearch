import SearchForm from '@/components/SearchForm'

import './styles/App.scss'

import githubLogo from './assets/images/github-mark-white.svg'
import reactLogo from './assets/images/react.svg'
import viteLogo from './assets/images/vite.svg'

function App() {
  return (
    <main className='app'>
      <section className='app__logotypes'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://github.com' target='_blank' rel='noreferrer'>
          <img src={githubLogo} className='logo github' alt='React logo' />
        </a>
      </section>
      <h1 className='app__title'>Github Users Search</h1>
      <SearchForm />
    </main>
  )
}

export default App
