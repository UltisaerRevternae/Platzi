import _ from 'lodash'

const data = [
  {
    username: 'Juan',
    role: 'admin'
  },
  {
    username: 'Maria',
    role: 'seller'
  },
  {
    username: 'Pedro',
    role: 'seller'
  },
  {
    username: 'Valentine',
    role: 'customer'
  }
]

const rta = _.groupBy(data, ({role}) => role)
console.log(rta)
