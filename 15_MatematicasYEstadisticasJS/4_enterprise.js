import { SALARIES } from "./4_analisisSalarios.js";

let enterprise = {}

SALARIES.forEach((value) => {
  value.works.forEach((work) => {
    if (!enterprise[work.company]) {
      enterprise[work.company] = {};
    } 
    if (!enterprise[work.company][work.year]) {
      enterprise[work.company][work.year] = []
    }
    enterprise[work.company][work.year].push(work.salary)
  })
})

export { enterprise }
