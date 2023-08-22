import styled from '@emotion/styled'

type IconRotatorProps = {
  rotate: boolean
}

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
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};

  cursor: pointer;
`

export const UserAvatar = styled.img`
  height: 3rem;
  width: 3rem;

  border-radius: 50%;
`

export const Type = styled.span`
  position: absolute;
  top: -4px;
  left: 4rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textPrimary40};
  font-weight: 100;
`

export const IconRotator = styled.div<IconRotatorProps>`
  transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
  transition: transform 0.4s;
`
