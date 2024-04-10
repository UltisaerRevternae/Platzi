
import { MathEstadistic } from "./4_analisisFunciones.js";
import { SALARIES } from "./4_analisisSalarios.js";
import { medianProjectionNextYear } from "./4_proyeccionSalarial.js";
import { linearRegression } from "./4_regresionLineal.js";
import { enterprise } from "./4_enterprise.js";

class UserData {
  constructor (userId) {
    this.userId = userId
    this.userData = this.findUserData()
    this.year = this.userData.works.map(({year}) => year)
    this.salary = this.userData.works.map(({salary}) => salary)
  }

  findUserData() {  return SALARIES.find(({id}) => id === this.userId)  }

  medianaSalary = () => { 
    return MathEstadistic.mediana(this.salary)
  }

  predictData = (year) => {
    return linearRegression(this.year, this.salary, year)
  }

  predictNextYear = () => {
    return medianProjectionNextYear(this.year, this.salary)
  }
}

const USER_1 = new UserData(1)
// console.log(USER_1.medianaSalary())
// console.log(USER_1.predictData(2024))
// console.log(USER_1.predictNextYear())

class Enterprise {
  constructor (nameCompany) {
    if (!enterprise[nameCompany]) throw new Error('Nombre de empresa no encontrado');
    this.nameCompany = nameCompany
    this.dataCompany = enterprise[this.nameCompany]
    this.years = Object.keys(this.dataCompany).map((value) => parseInt(value))
    this.salaries =  Object.values(this.dataCompany).map((element) => element.sort((a , b) => a - b))
  }

  median = (year) => {
    if (!this.dataCompany[year]) {
      return 'No se encontro data para el año seleccionado \nIntenta generar una prediccion';
    }
    return MathEstadistic.mediana(this.dataCompany[year]);
  }

  predictData = (year) => {

    const minSalary = this.salaries.map((values) => values[0])
    const maxSalary = this.salaries.map((values) => values[values.length - 1])

    const linearRegressionMin = linearRegression(this.years, minSalary, year)
    const linearRegressionMax = linearRegression(this.years, maxSalary, year)
    return { linearRegressionMin , linearRegressionMax}
  }

  predictNextYear = () => {

    const minSalary = this.salaries.map((values) => values[0])
    const maxSalary = this.salaries.map((values) => values[values.length - 1])

    const medianMinYear = medianProjectionNextYear(this.years, minSalary)
    const medianMaxYear = medianProjectionNextYear(this.years, maxSalary)

    return { medianMinYear, medianMaxYear}
  }
}

try {
  const COMPANY_1 = new Enterprise('Freelance');
  const median = COMPANY_1.median(2023);
  const predictDataC = COMPANY_1.predictData(2024);
  const predictNextYearC = COMPANY_1.predictNextYear()
  // console.log(median);
  // console.log(predictDataC);
  // console.log(predictNextYearC)

} catch (error) {
  console.error(error.message);
}


