import styled from '@emotion/styled'

export const SearchResultWrapper = styled.main`
  display: grid;
  grid-auto-flow: row;

  gap: 1rem;

  flex: 1;
  flex-basis: 575px;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.textPrimary80};
`

export const CoverContent = styled.div`
  place-self: center;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  color: ${({ theme }) => theme.colors.textPrimary40};
`

export const CoverTitle = styled.span`
  font-size: 3rem;
  font-weight: 500;
`
