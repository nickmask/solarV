import $ from 'jquery'
import { energyBill, sunlightHours, pricePerKW, kwPerSqMeter } from './preferences'

function kWGenerator (energyBill, sunlightHours, pricePerKW, kwPerSqMeter) {
  var energyBillWithoutDollarSign = energyBill.slice(1)
  var kwUsagePerDay = (energyBillWithoutDollarSign / pricePerKW) / 30.4 //kw/month
  //kw/month/squaremeter
  var kwPerDayPerSquareMeter = sunlightHours * kwPerSqMeter
  var requiredSizeinstall = Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
  var installSize = kwUsagePerDay / sunlightHours
  var requiredSizeInstall = Math.round(installSize * 100) / 100
  $('#recInstallSize').append('<div id="recInstallText">' + requiredSizeInstall + 'kW </div>' +'<div id="recInstallSizeText">(' + requiredSizeinstall + '  square meters)')
}

module.exports = kWGenerator
