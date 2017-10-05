function get(target: Function, property: PropertyKey) {
  return target()[property]
}

export default function proxyCurry(fn: Function, property: PropertyKey) {
  const curry = function(...args) {
    return fn(function(item) {
      return item[property](...args)
    })
  }

  return new Proxy(curry, { get })
}
