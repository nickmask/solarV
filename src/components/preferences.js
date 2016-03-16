import $ from 'jquery'

//Base required variables
export const sunlightHours = 5.59

export const pricePerKW = 0.28859
//kw per square meter is roughly 1000, but is then devided by efficency
export const efficency = 0.2

export const baseKwPerSqMeter = 1

export const elecBill = $(".irs-single").text()
