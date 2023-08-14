export const isObjEqual = (objA: object, objB: object) =>
  JSON.stringify(objA) === JSON.stringify(objB)
