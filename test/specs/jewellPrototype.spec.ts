import { jewellPrototype } from "../../src/index"
import { isFunction } from "../../src/jewell/helpers"

describe("jewellPrototype", () => {
  jewellPrototype(Array, ["shift"])

  it("does not jewell constructor", () => {
    expect(isFunction(Array.constructor)).toBeTruthy()
  })

  it("does not prototype attributes", () => {
    expect(typeof Array.prototype.length).toEqual("number")
  })

  it("prototypes methods", () => {
    expect(isFunction(Array.prototype.map["_fn"])).toBeTruthy()
  })

  it("does not jewell exception", () => {
    expect(isFunction(Array.prototype.shift)).toBeTruthy()
  })
})
