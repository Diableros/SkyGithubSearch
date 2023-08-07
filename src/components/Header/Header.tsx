import { logotypes } from './constants'

import * as S from './Header.style'

const Header = () => {
  const { alt, img, name, url } = logotypes.github

  return (
    <S.Header>
      <a key={alt} href={url} target='_blank' rel='noreferrer'>
        <S.LogotypeItem src={img} name={name} alt={alt} />
      </a>

      <h1> Github Users Search</h1>
    </S.Header>
  )
}

export default Header
