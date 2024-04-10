import { subDays, format} from 'date-fns'

const date = new Date(2016, 1 , 24)
const rta = subDays(date, 21)
const str = format(rta, 'yyyy/MM/dd')
console.log(str)
