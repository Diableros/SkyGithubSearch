import styled from '@emotion/styled'

import { buttoGeneral } from '@/components/UiKit/UiButton-like/general.style'

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    color: ${({ theme }) => theme.colors.textPrimary80};
  }
`

export const Select = styled.div`
  position: relative;
  display: flex;

  & > span {
    ${buttoGeneral}

    width: 7.5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &:hover,
    &:active {
      border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
      background-color: ${({ theme }) => theme.colors.buttonBackgroundRegular};
      cursor: default;
    }
  }

  & > button {
    display: flex;
    place-items: center;
    width: 2.5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Droplist = styled.div`
  position: absolute;
  width: 100%;

  top: 2.2rem;
  left: 0rem;

  & > div {
    ${buttoGeneral}
    width: 100%;

    &:first-of-type {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-of-type {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
