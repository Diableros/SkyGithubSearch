import './styles/App.scss'

import githubLogo from './assets/github-mark-white.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://github.com' target='_blank' rel='noreferrer'>
          <img src={githubLogo} className='logo github' alt='React logo' />
        </a>
      </div>
      <h1>GitHub Users Search</h1>
    </>
  )
}

export default App
