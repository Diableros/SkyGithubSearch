import { css, CssThemed } from '@emotion/react'

export const buttoGeneral: CssThemed = ({ theme }) => css`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  width: 7rem;
  padding: 0.2rem 0 0.2rem;

  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: ${theme.colors.textPrimary80};

  background-color: ${theme.colors.buttonBackground};
  border: 1px solid ${theme.colors.strokeRegular};
  border-radius: ${theme.border.radius};

  cursor: pointer;

  transition: border 0.1s ease;

  &:hover {
    border: 1px solid ${theme.colors.strokeHover};
  }

  &:active {
    border-color: ${theme.colors.strokeActive};
  }
`
