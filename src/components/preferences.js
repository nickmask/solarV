import $ from 'jquery'

var sunlightHours = 5.59

var pricePerKW = 0.28859
//kw per square meter is roughly 1000, but is then devided by efficency
var kwPerSqMeter = 0.200

var energyBill = $(".irs-single").text()

export default {
  sunlightHours : sunlightHours,
  pricePerKW : pricePerKW,
  kwPerSqMeter: kwPerSqMeter,
  energyBill: energyBill
}
