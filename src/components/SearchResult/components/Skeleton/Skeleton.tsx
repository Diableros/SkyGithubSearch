import { getSkeletonLoginWidth } from './utils'

import * as S from './Skeleton.style'

type PropsType = {
  quantity?: number
}

const Skeleton = ({ quantity = 10 }: PropsType) => {
  return Array.from({ length: quantity }).map((_, index) => (
    <S.SkeletonItem key={index}>
      <S.SkeletonUserInfo>
        <S.SkeletonUserAvatar />
        <div>
          <S.SkeletonLogin width={getSkeletonLoginWidth()} />
          <S.SkeletonType width={getSkeletonLoginWidth(2, 0)} />
        </div>
      </S.SkeletonUserInfo>

      <S.SkeletonButton />
    </S.SkeletonItem>
  ))
}

export default Skeleton
