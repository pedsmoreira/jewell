export default class Claimant {
  name: string
  age: number
  gender: "male" | "female"
  benefits: number = 0

  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  get male(): boolean {
    return this.gender === "male"
  }

  get female(): boolean {
    return this.gender === "female"
  }

  get retired(): boolean {
    if (this.male) {
      return this.age >= 65
    }

    return this.age >= 60
  }

  receiveBenefits(amount): void {
    this.benefits += amount
  }
}
