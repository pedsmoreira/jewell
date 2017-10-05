import proxyCurry from "./proxyCurry"
import { arrayPropertyReflector, isFunction } from "../helpers"
import proxyFunctionWithZeroArgs from "./proxyFunctionWithZeroArgs"
import proxyFunctionMapProperty from "./proxyFunctionMapProperty"

export const PROPERTY_ACCESSOR = "_fn"

function buildProxyGet(value: any[]): Function {
  return function(fn: Function, property: PropertyKey) {
    if (property === PROPERTY_ACCESSOR) {
      return fn
    }

    if (property === "bind") {
      return null
    }

    const boundFn = fn.bind(value)

    if (fn.length === 0) {
      return proxyFunctionWithZeroArgs(boundFn, property)
    }

    const propertyReflector = arrayPropertyReflector(value, property)
    if (isFunction(propertyReflector)) {
      return proxyCurry(boundFn, property)
    }

    return proxyFunctionMapProperty(boundFn, property)
  }
}

function apply(target: Function, thisArg: any, argumentsList: any[]) {
  return target.bind(thisArg)(...argumentsList)
}

export default function proxy(value: any, fn: Function) {
  return new Proxy(fn, { get: buildProxyGet(value) as any, apply })
}
