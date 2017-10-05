function proxyFunctionWithZeroArgs(
  target: Function,
  property: PropertyKey
): any[] {
  const result = target()
  const value = result[property]

  if (value.bind) {
    return value.bind(result)
  }
  return value
}

export default proxyFunctionWithZeroArgs
