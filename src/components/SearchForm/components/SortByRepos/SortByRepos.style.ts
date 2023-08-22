import styled from '@emotion/styled'

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    color: ${({ theme }) => theme.colors.textPrimary80};
  }
`
