import { css } from '@emotion/react'

export const buttoGeneral = css`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  width: 7rem;
  padding: 0.2rem 0 0.2rem;

  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: rgb(201, 209, 217);

  background-color: rgb(33, 38, 45);
  border: 1px solid rgb(54, 59, 66);
  border-radius: 0.5rem;

  cursor: pointer;

  transition: border 0.1s ease;

  &:hover {
    border: 1px solid rgb(139, 148, 158);
  }

  &:active {
    border-color: rgb(33, 38, 45);
  }
`
