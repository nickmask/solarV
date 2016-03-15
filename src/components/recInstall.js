var $ = require('jquery')
var sunlightHours = require('./preferences').sunlightHours
var pricePerKW = require('./preferences').pricePerKW
var kwPerSqMeter = require('./preferences').kwPerSqMeter


function KWGenerator () {
  var energyBill = $(".irs-single").text()
  var noDollarBill = energyBill.slice(1)
  var kwUsagePerDay = (noDollarBill / pricePerKW) / 30.4 //kw/month
  //kw/month/squaremeter
  var kwPerDayPerSquareMeter = sunlightHours * kwPerSqMeter
  var requiredSizeinstall = Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
  var installSize = kwUsagePerDay / sunlightHours
  var requiredSizeInstall = Math.round(installSize * 100) / 100
  $('#recInstallSize').append('<div id="recInstallText">' + requiredSizeInstall + 'kW </div>' +'<div id="recInstallSizeText">(' + requiredSizeinstall + '  square meters)')
}

module.exports = KWGenerator