import { css, CssThemed, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

type WithRandomWidthType = {
  width: number
}

const pulse = keyframes`
	0%, 
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0.5;
	}
`

const generalSkeletonCSS: CssThemed = ({ theme }) => css`
  border: 1px solid ${theme.colors.strokeRegular};
  border-radius: ${theme.border.radius};

  background-color: ${theme.colors.buttonBackgroundHover};

  animation: ${pulse} 1s ease-in-out infinite both;
`

export const SkeletonItem = styled.div`
  position: relative;
  width: 543px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundThird};
  padding: 0.5rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  border-radius: ${({ theme }) => theme.border.radius};
`
export const SkeletonUserInfo = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const SkeletonUserAvatar = styled.div`
  height: 3rem;
  width: 3rem;

  ${generalSkeletonCSS}

  border-radius: 50%;
`

export const SkeletonLogin = styled.div<WithRandomWidthType>`
  height: 1.25rem;
  width: ${({ width }) => `${width}rem`};

  ${generalSkeletonCSS}
`

export const SkeletonType = styled.div<WithRandomWidthType>`
  position: absolute;
  top: -2px;
  left: 4.1rem;
  height: 0.5rem;
  width: ${({ width }) => `${width}rem`};

  ${generalSkeletonCSS}
`

export const SkeletonButton = styled.div`
  width: 2rem;
  height: 1.5rem;

  ${generalSkeletonCSS}
`
