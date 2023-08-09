import styled from '@emotion/styled'

export const ResultListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundThird};
  padding: 0.5rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.strokeRegular};
  border-radius: ${({ theme }) => theme.border.radius};
`
export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const UserAvatar = styled.img`
  height: 3rem;
  width: 3rem;

  border-radius: 50%;
`
