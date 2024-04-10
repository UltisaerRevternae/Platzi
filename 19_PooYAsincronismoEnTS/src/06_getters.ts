class MyDate {

  #month: number
  #day: number

  constructor (
      public year: number = 1649,
      month: number = 16,
      day: number = 49
    ) {
    this.#month = month
    this.#day = day
  }

  getData = (): object => {
    return {
      year: this.year,
      month: this.#month,
      day: this.#day,
    }
  }

  printFormat = (): string => {
    const day = this.addPadding(this.#day)
    const month = this.addPadding(this.#month)

    return `${this.year}/${month}/${day}`
  }

  addPadding(value : number): string {
    return (value.toString()).padStart(2, '0')
  }

  add(amount : number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.#day += amount
    }
    if (type === 'months') {
      this.#month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  get isLeadYear() : boolean {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0
  }

  get day() {return this.#day}
  get month() {return this.#month}

  set day(value: number) {
    if (value > 0 && value <= 31 ){
      this.#day = value
    }
  }
}

const myDate = new MyDate(2024,  7 , 17)
myDate.day = 40
console.log({
  day: myDate.day,
  month: myDate.month,
  year: myDate.year,
  lead: myDate.isLeadYear,
  format: myDate.printFormat()
})

const myDate2 = new MyDate()
console.log({
  day: myDate2.day,
  month: myDate2.month,
  year: myDate2.year,
  lead: myDate2.isLeadYear,
  format: myDate2.printFormat()
})
export { MyDate }
