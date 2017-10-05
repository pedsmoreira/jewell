import jewell from "../../src/index"
import { isFunction } from "../../src/jewell/helpers"

describe("test", () => {
  let array: any

  beforeEach(() => {
    array = ["cat", "elephant"]
  })

  it("sets the original function to _fn", () => {
    const fn = array.shift
    jewell(array, "shift")

    expect(array.shift).not.toBe(fn)
    expect(array.shift._fn).toBe(fn)
  })

  context("accessing a not jewelled function", () => {
    it("does not get proxied", () => {
      expect(isFunction(array.map)).toBeTruthy()
    })
  })

  context("accessing a jewelled function", () => {
    context("that has no args", () => {
      beforeEach(() => {
        jewell(array, "shift")
      })

      it("returns an array", () => {
        expect(array.shift.toUpperCase()).toEqual("CAT")
      })
    })

    context("that has an argument", () => {
      beforeEach(() => {
        jewell(array, "map")
      })

      context("with a property", () => {
        it("returns an array mapping properties for each execution", () => {
          const catLength = array[0].length
          const elephantLength = array[1].length
          expect(array.map.length).toEqual([catLength, elephantLength])
        })
      })

      context("with a function", () => {
        it("executes the function for each instance", () => {
          expect(array.map.toUpperCase()).toEqual(["CAT", "ELEPHANT"])
        })
      })
    })
  })

  context("calling a jewell function", () => {
    it("should call original function with given arguments", () => {
      expect(array.map(item => item.toUpperCase())).toEqual(["CAT", "ELEPHANT"])
    })
  })
})
