import ky from 'ky'

import { BASE_URL } from './constants'
import { KyInstance } from 'node_modules/ky/distribution/types/ky'

export const api: () => KyInstance = () => {
  const headers = import.meta.env.VITE_GITHUB_TOKEN
    ? {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      }
    : {}

  return ky.create({
    prefixUrl: BASE_URL,
    headers,
  })
}
