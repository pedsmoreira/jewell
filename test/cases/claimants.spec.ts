import jewellPrototype from "../../src/jewell/jewellPrototype"
import Claimant from "../models/Claimant"

const youngJohn = new Claimant("Young John", 18, "male")
const oldJohn = new Claimant("Old John", 100, "male")
const youngJane = new Claimant("Young Jane", 20, "female")
const oldJane = new Claimant("Old Jane", 99, "female")

const employees = [youngJohn, oldJohn, youngJane, oldJane] as any

describe("claimant case", () => {
  jewellPrototype(Array)

  it("filters females", () => {
    expect(employees.filter.female).toEqual([youngJane, oldJane])
  })

  it("filters males", () => {
    expect(employees.filter.male).toEqual([youngJohn, oldJohn])
  })

  it("filters retired", () => {
    expect(employees.filter.retired).toEqual([oldJohn, oldJane])
  })

  it("receives benefits", () => {
    employees.forEach.receiveBenefits(10)
    expect(employees.map.benefits).toEqual([10, 10, 10, 10])
  })
})
