export function arrayPropertyReflector(
  array: any[],
  property: PropertyKey
): any {
  return (array[0] || {})[property]
}

export function isFunction(value: any): boolean {
  return typeof value === "function"
}

export function isFunctionWithZeroOrOneArgs(value: any): boolean {
  return isFunction(value) && value.length <= 1
}
