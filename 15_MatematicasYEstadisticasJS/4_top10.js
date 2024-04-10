import { SALARIES } from "./4_analisisSalarios.js";
import { MathEstadistic } from "./4_analisisFunciones.js";

const userMedia = {}
SALARIES.forEach((value) => userMedia[value.name] = MathEstadistic.mediana(value.works.map(({ salary }) => salary)))

const orderUserData = Object.entries(userMedia).sort((a , b) => a[1] - b[1])
const top10 = orderUserData.slice(orderUserData.length - parseInt(orderUserData.length / 10))

console.log({
  userMedia : Object.fromEntries(orderUserData),
  top10: Object.fromEntries(top10)
})

