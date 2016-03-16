import $ from 'jquery'

//Base required variables
const sunlightHours = 5.59

const pricePerKW = 0.28859
//kw per square meter is roughly 1000, but is then devided by efficency
const efficency = 0.2

const baseKwPerSqMeter = 1


const elecBill = $(".irs-single").text()

//Cacluated variables
const kwPerSqMeter = (baseKwPerSqMeter, efficency) => {
  return efficency / baseKwPerSqMeter
}

const elecBillNoDollar = elecBill => {
return elecBill.replace("$,''")
}

const kwUsagePerDay = (elecBillNoDollar, pricePerKW) => {
  return (elecBillNoDollar / pricePerKW) / 30.4
}

const kwPerDayPerSquareMeter = (sunlightHours, kwPerSqMeter) => {
  return sunlightHours * kwPerSqMeter
}

export default {
  kwPerSqMeter: kwPerSqMeter,
  elecBillNoDollar: elecBillNoDollar,
  kwUsagePerDay: kwUsagePerDay,
  kwPerDayPerSquareMeter: kwPerDayPerSquareMeter,
  sunlightHours : sunlightHours,
  pricePerKW : pricePerKW,
  kwPerSqMeter: kwPerSqMeter,
  kwUsagePerDay: kwUsagePerDay
}
