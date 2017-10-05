export default class Animal {
  name: string
  sound: string

  constructor(name: string, sound: string) {
    this.name = name
    this.sound = sound
  }

  appendedName(suffix: string) {
    return this.name + suffix
  }

  friendly() {
    return this.name === "fox"
  }

  foxify() {
    return "fox"
  }

  get foxified() {
    return this.foxify()
  }
}
