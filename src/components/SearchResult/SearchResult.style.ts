import styled from '@emotion/styled'

export const SearchResultWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  height: 100%;
  flex: 1;
  flex-basis: 575px;
  width: 575px;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.textPrimary80};
`

export const SearchResultContent = styled.main`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  height: 100%;
`

export const CoverContent = styled.div`
  place-self: center;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  gap: 1rem;

  color: ${({ theme }) => theme.colors.textPrimary40};
`

export const CoverTitle = styled.span`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`
export const CoverErrorText = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`
