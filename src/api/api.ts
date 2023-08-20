import ky from 'ky'

import { BASE_URL } from './constants'
import { KyInstance } from 'node_modules/ky/distribution/types/ky'

export const api: KyInstance = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` || '',
  },
})
