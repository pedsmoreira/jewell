import {
  arrayPropertyReflector,
  isFunction,
  isFunctionWithZeroOrOneArgs
} from "../../src/jewell/helpers"

describe("helpers", () => {
  describe("arrayPropertyReflector", () => {
    it("does not crash with empty array", () => {
      const array = []
      expect(arrayPropertyReflector(array, "name")).toBeUndefined()
    })

    it("does not crash with undefined property", () => {
      const array = [{}]
      expect(arrayPropertyReflector(array, "name")).toBeUndefined()
    })

    it("return property from first index", () => {
      const array = [{ name: "John Doe" }]
      expect(arrayPropertyReflector(array, "name")).toEqual("John Doe")
    })
  })

  describe("isFunction", () => {
    context("given a function", () => {
      it("returns true", () => {
        const fn = () => 0
        expect(isFunction(fn)).toBeTruthy()
      })
    })

    context("given an object", () => {
      it("returns false", () => {
        expect(isFunction({})).toBeFalsy()
      })
    })

    context("given a string", () => {
      it("returns false", () => {
        expect(isFunction("test")).toBeFalsy()
      })
    })
  })

  describe("isFunctionWithZeroOrOneArgs", () => {
    context("given an object", () => {
      expect(isFunctionWithZeroOrOneArgs({})).toBeFalsy()
    })

    context("given a function with zero args", () => {
      const fn = () => 0
      expect(isFunctionWithZeroOrOneArgs(fn)).toBeTruthy()
    })

    context("given a function with one arg", () => {
      const fn = a => a
      expect(isFunctionWithZeroOrOneArgs(fn)).toBeTruthy()
    })

    context("given a function with two args", () => {
      const fn = (a, b) => a + b
      expect(isFunctionWithZeroOrOneArgs(fn)).toBeFalsy()
    })
  })
})
