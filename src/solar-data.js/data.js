// E = A * r * H * PR

// E = Energy (kWh)
// A = Total solar panel Area (m²)
// r = solar panel yield (%)
// H = Annual average solar radiation on tilted panels (shadings not included)
// PR = Performance ratio, coefficient for losses (range between 0.5 and 0.9, default value = 0.75)

export const kwPerSqMeter = (baseKwPerSqMeter, efficency) => {
  return efficency / baseKwPerSqMeter
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
