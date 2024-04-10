import { MathEstadistic } from "./4_analisisFunciones.js"

const medianProjectionNextYear = (keys, values ) => {
  let growths = []

  for (let i = 1; i < keys.length; i++) {
    const salaryCurrent = values[i]
    const salaryPrevious = values[i - 1]
    const growth = salaryCurrent - salaryPrevious
    const percentageGrowth = growth / salaryPrevious
  
    growths.push(percentageGrowth)
  }
  
  const median = MathEstadistic.mediana(growths)
  const increase = values[values.length - 1] * median
  const newSalary = (values[values.length - 1] + increase).toFixed(3)

  return newSalary
}

export { medianProjectionNextYear }