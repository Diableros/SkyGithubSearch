import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

export const SelectBox = styled.div`
  position: relative;
  display: flex;
`

export const SelectedValue = styled.div`
  ${buttonGeneral}

  width: 6rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
    background-color: ${({ theme }) => theme.colors.buttonBackgroundRegular};
    cursor: default;
  }
`

export const SelectDropButton = styled.button`
  ${buttonGeneral}

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const SlectDropList = styled.div`
  position: absolute;
  width: 100%;

  top: 2.2rem;
  left: 0rem;

  & > div {
    ${buttonGeneral}

    &:first-of-type {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-of-type, :last-of-type) {
      border-radius: 0;
    }

    &:last-of-type {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
