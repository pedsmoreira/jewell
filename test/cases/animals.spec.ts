import jewellPrototype from "../../src/jewell/jewellPrototype"
import Animal from "../models/Animal"

const animals = [
  new Animal("cat", "meow"),
  new Animal("dog", "woof"),
  new Animal("fox", "a ring ding ding")
] as any

describe("animals case", () => {
  jewellPrototype(Array)

  it("gets first animal's uppercase name", () => {
    expect(animals.map.name.shift.toUpperCase()).toEqual("CAT")
  })

  it("maps foxify() results", () => {
    expect(animals.map.foxify()).toEqual(["fox", "fox", "fox"])
  })

  it("maps foxified animals", () => {
    expect(animals.map.foxified).toEqual(["fox", "fox", "fox"])
  })

  it("maps appended names", () => {
    expect(animals.map.appendedName("f")).toEqual(["catf", "dogf", "foxf"])
  })

  it("get friendly animal names", () => {
    expect(animals.filter.friendly.map.name).toEqual(["fox"])
  })

  it("maps animals names by calling map()", () => {
    expect(animals.map(animal => animal.name)).toEqual(["cat", "dog", "fox"])
  })

  it("maps names in reverse order", () => {
    expect(animals.slice().reverse.map.name).toEqual(["fox", "dog", "cat"])
  })

  it("maps reversed appended uppercase names", () => {
    expect(animals.map.appendedName("f").reverse.map.toUpperCase()).toEqual([
      "FOXF",
      "DOGF",
      "CATF"
    ])
  })
})
