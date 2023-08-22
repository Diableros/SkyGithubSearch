import { LogoItem } from './types'
import { Logotype } from './enums'

export const logotypes: Record<Logotype, LogoItem> = {
  [Logotype.Github]: {
    name: Logotype.Github,
    img: 'github',
    url: 'https://github.com',
    alt: 'Github logo',
    shadow: '#ffffffaa',
  },
}
