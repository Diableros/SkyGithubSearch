import styled from '@emotion/styled'

import { buttonGeneral } from '../buttonLikeGeneral.style'

type SelectDropListProps = {
  dropListShift: number
  isShow?: boolean
}

type SelectedValueProps = {
  width: string
}

type SelectBoxProps = {
  $fontSize?: string
}

export const SelectBox = styled.div<SelectBoxProps>`
  position: relative;
  display: flex;
  ${({ $fontSize }) => ($fontSize ? `font-size: ${$fontSize};` : '')}
`

export const SelectedValue = styled.div<SelectedValueProps>`
  ${buttonGeneral}

  padding-left: 1rem;
  padding-right: 1rem;

  width: ${({ width }) => width};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  font-size: inherit;

  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
    background-color: ${({ theme }) => theme.colors.buttonBackgroundRegular};
    cursor: default;
  }
`

export const SelectDropButton = styled.button`
  ${buttonGeneral}

  padding: 0 0.5rem;

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

    font-size: 0.75rem;
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
