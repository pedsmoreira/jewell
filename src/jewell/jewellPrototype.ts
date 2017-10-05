import jewell from "./jewell"
import { isFunctionWithZeroOrOneArgs } from "./helpers"

const exceptionFunctions: PropertyKey[] = ["constructor"]

function isPrototypeException(property: PropertyKey, except: PropertyKey[]) {
  return (
    exceptionFunctions.indexOf(property) !== -1 ||
    except.indexOf(property) !== -1
  )
}

function prototypeProperty(klass: Function, property: PropertyKey) {
  const value = klass.prototype[property]
  if (isFunctionWithZeroOrOneArgs(value)) {
    jewell(klass.prototype, property)
  }
}

function jewellPrototype(klass: Function, except: PropertyKey[] = []) {
  const properties = Object.getOwnPropertyNames(klass.prototype)
  properties.forEach((property: PropertyKey) => {
    if (!isPrototypeException(property, except)) {
      prototypeProperty(klass, property)
    }
  })
}

export default jewellPrototype
