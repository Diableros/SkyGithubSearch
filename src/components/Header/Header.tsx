import UiIcon from '../UiKit/UiIcon'

import { logotypes } from './constants'
import { TestID } from '@/enums'

import * as S from './Header.style'

const Header = () => {
  const { img, url } = logotypes.github

  return (
    <S.Header data-testid={TestID.Header}>
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
