const WIDTH_DEFAULT_BASE = 3
const WIDTH_DEFAULT_DELTA = 8

type GetSkeletonLoginWidth = (base?: number, delta?: number) => number

export const getSkeletonLoginWidth: GetSkeletonLoginWidth = (
  base = WIDTH_DEFAULT_BASE,
  delta = WIDTH_DEFAULT_DELTA,
) => {
  const width = Math.round(Math.random() * delta + base)

  console.log(width)

  return width
}
