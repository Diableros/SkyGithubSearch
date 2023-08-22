import styled from '@emotion/styled'

type DetailsWrapperProps = {
  isOpen: boolean
}

export const DetailsWrapper = styled.section<DetailsWrapperProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;

  padding: ${({ isOpen }) => (isOpen ? '1rem' : '0')};

  height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
  border: ${({ isOpen, theme }) =>
    isOpen ? `1px solid ${theme.colors.strokeActive}` : '0'};
  border-radius: ${({ theme }) => theme.border.radius};

  overflow: hidden;
`

export const Field = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  padding: 0.3rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundThird};
  margin: -1px;

  text-align: start;
  padding: 0.4rem 0.6rem;
`

export const FieldName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary60};
  margin-right: 0.5rem;
`
