import ResultListItem from '../ResultListItem'

import { User } from '@/api/types'

type PropsType = {
  resultData: User[]
}

const ResultList = ({ resultData }: PropsType) => {
  return resultData.map(user => <ResultListItem key={user.id} user={user} />)
}

export default ResultList
