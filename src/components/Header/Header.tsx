import UiIcon from '../UiIcon'

import { logotypes } from './constants'

import * as S from './Header.style'

const Header = () => {
  const { img, url } = logotypes.github

  return (
    <S.Header>
      <UiIcon
        name={img}
        width='100px'
        height='100px'
        onClick={() => window.open(url, '_blank')}
      />
      <h1> Github Users Search</h1>
    </S.Header>
  )
}

export default Header
