function proxyFunctionMapProperty(fn: Function, property: PropertyKey): any[] {
  return fn(item => item[property])
}

export default proxyFunctionMapProperty
