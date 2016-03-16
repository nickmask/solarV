import $ from 'jquery'
import {sunlightHours, pricePerKW, efficency, baseKwPerSqMeter, elecBill} from './preferences'

export const kwPerSqMeter = (baseKwPerSqMeter, efficency) => {
  return efficency / baseKwPerSqMeter
}

export const elecBillNoDollar = elecBill => {
return elecBill.replace('$','')
}

export const kwUsagePerDay = (elecBillNoDollar, pricePerKW) => {
  return Math.round(((elecBillNoDollar / pricePerKW) / 30.4) * 100) / 100
}

export const kwPerDayPerSquareMeter = (sunlightHours, kwPerSqMeter) => {
  return sunlightHours * kwPerSqMeter
}

export const requiredSizeinstall = (kwUsagePerDay, kwPerDayPerSquareMeter) => {
  return Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
}

export const installSize = (kwUsagePerDay, sunlightHours) => {
  return Math.round((kwUsagePerDay / sunlightHours) * 100) / 100
}

// $('#recInstallSize').append('<div id="recInstallText">' + requiredSizeInstall + 'kW </div>' +'<div id="recInstallSizeText">(' + requiredSizeinstall + '  square meters)')
