import { Logotype } from './enums'

import { icons } from '@/assets/icons'

export type LogoItem = {
  name: Logotype
  url: string
  img: keyof typeof icons
  shadow: string
  alt: string
}
