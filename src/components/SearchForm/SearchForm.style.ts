import styled from '@emotion/styled'

import { buttonGeneral } from '@/components/UiKit/UiButton-like/buttonLikeGeneral.style'

export const SearchForm = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  padding: 1rem;
  border-radius: 0.4rem;

  & > input {
    font-size: 1.2rem;
    padding: 0.7rem;
    margin-bottom: 1rem;

    background-color: ${({ theme }) => theme.colors.backgroundMain};
    border-radius: 0.5rem;
    border: 1px solid #ffffff30;

    color: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textPrimary40};
    }

    &:not(:placeholder-shown) {
      outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.inputOutline};
    }
  }
`

export const ButtonsBox = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  & button {
    ${buttonGeneral}

    & div {
      display: flex;
      align-items: center;
      width: 1.5rem;
      position: relative;

      & > img {
        position: absolute;
        top: 0.2rem;
      }
    }
  }
`
