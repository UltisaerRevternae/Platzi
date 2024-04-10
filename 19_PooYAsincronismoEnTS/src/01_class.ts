class MyDate {

  year: number
  month: number
  day: number

  constructor (year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
  getData = () => {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
    }
  }
}

const myDate = new MyDate(2021,  7 , 17)
console.log(myDate.getData())
