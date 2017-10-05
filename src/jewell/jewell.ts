import proxy from "./proxy"

export default function jewell(value: any, method: PropertyKey) {
  let fn: Function = value[method]

  Object.defineProperty(value, method, {
    get: function() {
      return proxy(this, fn)
    }
  } as any)
}
