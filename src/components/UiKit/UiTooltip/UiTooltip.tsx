import * as React from 'react'

import { Coords } from './types'

import * as S from './UiTooltip.style'

interface PropsType {
  tooltipText: string
  children: React.ReactNode
}

const UiTooltip = ({ tooltipText, children }: PropsType) => {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false)
  const [tooltipPos, setTooltipPos] = React.useState<Coords>({
    x: 0,
    y: 0,
  })

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTooltipPos({ x: event.clientX, y: event.clientY })
    }

    if (showTooltip) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showTooltip])

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip ? (
        <S.Tooltip tooltipPos={tooltipPos}>{tooltipText}</S.Tooltip>
      ) : null}
    </div>
  )
}

export default UiTooltip
