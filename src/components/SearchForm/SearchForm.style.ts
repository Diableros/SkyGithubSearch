import styled from '@emotion/styled'

import { buttoGeneral } from '@/styles/style'

export const SearchForm = styled.form`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid rgb(48, 54, 61);
  padding: 1rem;
  border-radius: 0.4rem;

  & > input {
    font-size: 1.2rem;
    padding: 0.7rem;
    margin-bottom: 1rem;

    background-color: rgb(1, 4, 9);
    border-radius: 0.5rem;
    border: 1px solid #ffffff30;

    color: inherit;

    &::placeholder {
      color: rgba(97, 104, 115);
    }

    &:not(:placeholder-shown) {
      outline: 1px solid rgb(47, 129, 247);
    }

    &:focus {
      outline: 2px solid rgb(47, 129, 247);
    }
  }
`

export const ButtonsBox = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  & button {
    ${buttoGeneral}

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
