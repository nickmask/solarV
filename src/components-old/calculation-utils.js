import $ from 'jquery'

export const kwPerSqMeter = (baseKwPerSqMeter, efficency) => {
  return efficency / baseKwPerSqMeter
}

export const elecBillNoDollar = elecBill => {
return elecBill.replace('$','')
}

export const kwUsagePerDay = (elecBillNoDollar, pricePerKW) => {
  return Math.round(((elecBillNoDollar / pricePerKW) / 30.4) * 100) / 100
}

export const kwPerDayPerSquareMeter = (sunlightHoursPerDay, kwPerSqMeter) => {
  return sunlightHoursPerYear * kwPerSqMeter
}

export const installSizeMeter = (kwUsagePerDay, kwPerDayPerSquareMeter) => {
  return Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
}

export const installSizeKw = (kwUsagePerDay, sunlightHoursPerDay) => {
  return Math.round((kwUsagePerDay / sunlightHoursPerDay) * 100) / 100
}

// $('#recInstallSize').append('<div id="recInstallText">' + requiredSizeInstall + 'kW </div>' +'<div id="recInstallSizeText">(' + requiredSizeinstall + '  square meters)')
