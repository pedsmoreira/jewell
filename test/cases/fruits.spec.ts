import jewell from "../../src/jewell/jewell"

const fruitsOfTheWorld = [
  ["apple", "pineapple", "pear"],
  ["manzana", "pera", "piña"],
  ["poma", "perera", "ananàs"]
] as any

jewell(fruitsOfTheWorld, "map")

describe("fruits case", () => {
  it("capitalizes each fruit name", () => {
    expect(fruitsOfTheWorld.map.map(fruit => fruit.toUpperCase())).toEqual([
      ["APPLE", "PINEAPPLE", "PEAR"],
      ["MANZANA", "PERA", "PIÑA"],
      ["POMA", "PERERA", "ANANÀS"]
    ])
  })
})
