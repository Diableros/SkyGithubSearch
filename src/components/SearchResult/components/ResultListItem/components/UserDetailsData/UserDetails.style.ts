import styled from '@emotion/styled'

type DetailsWrapperProps = {
  isOpen: boolean
  openHeight: number
}

export const DetailsWrapper = styled.section<DetailsWrapperProps>`
  height: ${({ isOpen, openHeight }) => (isOpen ? `${openHeight}px` : '0')};
  border: ${({ isOpen, theme }) =>
    isOpen ? `1px solid ${theme.colors.strokeActive}` : '0'};
	
  border-radius: ${({ theme }) => theme.border.radius};

  display: flex;
  align-items: flex-end;

  transition: height 0.4s;
  overflow: hidden;
`

export const MeasuringBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 0.3rem;
  padding: 0.3rem;
`

export const Field = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  padding: 0.3rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundThird};
  border-radius: ${({ theme }) => theme.border.radius};

  text-align: start;
  padding: 0.3rem 0.6rem;
`

export const FieldName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary60};
  margin-right: 0.5rem;
`
