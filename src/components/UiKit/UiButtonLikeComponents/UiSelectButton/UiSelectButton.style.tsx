import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

type SelectDropListProps = {
  dropListShift: number
  isShow?: boolean
}

type SelectedValueProps = {
  width: string
}

export const SelectBox = styled.div`
  position: relative;
  display: flex;
`

export const SelectedValue = styled.div<SelectedValueProps>`
  ${buttonGeneral}

  width: ${({ width }) => width};
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

  padding-left: 0 0.5rem;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const SelectDropList = styled.div<SelectDropListProps>`
  position: absolute;
  width: 100%;

  top: ${({ dropListShift }) =>
    dropListShift ? `calc(-${dropListShift}px - 3px)` : '2.2rem'};
  left: 0;
  z-index: 99;

  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};

  display: flex;
  flex-direction: ${({ dropListShift }) =>
    dropListShift ? 'column-reverse' : 'column'};

  & > div {
    ${buttonGeneral}

    &:first-of-type {
      ${({ dropListShift }) =>
        dropListShift ? 'border-top' : 'border-bottom'}-left-radius: 0;
      ${({ dropListShift }) =>
        dropListShift ? 'border-top' : 'border-bottom'}-right-radius: 0;
    }

    &:not(:first-of-type, :last-of-type) {
      border-radius: 0;
    }

    &:last-of-type {
      ${({ dropListShift }) =>
        dropListShift ? 'border-bottom' : 'border-top'}-left-radius: 0;
      ${({ dropListShift }) =>
        dropListShift ? 'border-bottom' : 'border-top'}-right-radius: 0;
    }
  }
`
