import { ADDITIONAL_PAGE_BUTTONS } from './constants'

export const filterPageButtons = (
  buttonsArray: number[],
  currentPage: number,
) => {
  return buttonsArray.filter((pageNumber, _, array) => {
    const sumAdditionalButtons = ADDITIONAL_PAGE_BUTTONS * 2 + 1
    const arrLength = array.length

    const beforeCalcStart = currentPage - ADDITIONAL_PAGE_BUTTONS
    const afterCalcEnd = currentPage + ADDITIONAL_PAGE_BUTTONS

    let beforeStart: number
    let afterEnd: number

    if (beforeCalcStart <= 1) {
      beforeStart = 1
      afterEnd = beforeStart + sumAdditionalButtons
    } else if (afterCalcEnd >= arrLength) {
      afterEnd = arrLength
      beforeStart = arrLength - sumAdditionalButtons
    } else {
			beforeStart = beforeCalcStart
			afterEnd = afterCalcEnd
		}

    return (
      pageNumber === 1 ||
      (pageNumber >= beforeStart && pageNumber <= afterEnd) ||
      pageNumber === array.length
    )
  })
}
