import { LogoItem } from './types'
import { Logotype } from './enums'

import img from '@/assets/images'

export const logotypes: Record<Logotype, LogoItem> = {
  [Logotype.Github]: {
    name: Logotype.Github,
    img: img.github,
    url: 'https://github.com',
    alt: 'Github logo',
    shadow: '#ffffffaa',
  },
}
