import * as React from 'react'

import UiIcon from '../UiKit/UiIcon'

import * as S from './ScrollUpButton.style'

const ScrollUpButton = () => {
  const [scroll, setScroll] = React.useState<number>(0)
  const [isShowUpButton, setIsShowUpButton] = React.useState<boolean>(false)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    if (scroll > document.documentElement.clientHeight * 0.4) {
      setIsShowUpButton(true)
    } else {
      setIsShowUpButton(false)
    }
  }, [scroll])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.ScrollUp onClick={handleUpButton} isShow={isShowUpButton}>
      <S.IconRotator>
        <UiIcon name='arrowRight' width='2rem' />
      </S.IconRotator>
    </S.ScrollUp>
  )
}

export default ScrollUpButton
