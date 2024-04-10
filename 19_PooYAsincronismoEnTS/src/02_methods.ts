class MyDate {

  year: number
  month: number
  day: number

  constructor (year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  getData = (): object => {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
    }
  }

  printFormat = (): string => {
    return `${this.year}/${this.month}/${this.day}`
  }

  add(amount : number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2021,  7 , 17)
console.log(myDate.getData())
console.log(myDate.printFormat())
myDate.add(12, 'days')
myDate.add(2, 'months')
console.log(myDate.getData())
console.log(myDate.printFormat())
console.log(myDate.day)
export { MyDate }
