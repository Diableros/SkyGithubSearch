import { UserDetails } from '@/api/types'

export const showUserDetailFields: (keyof UserDetails)[] = [
  'name',
  'id',
  'public_repos',
  'followers',
  'following',
  'created_at',
  'updated_at',
]

export const fieldNames: Record<string, string> = {
  name: 'Name',
  id: 'ID',
  public_repos: 'Public repos',
  followers: 'Followers',
  following: 'Following',
  created_at: 'Created',
  updated_at: 'Updated',
}
