var $ = require('jquery')

function KWGenerator () {
  var energyBill = $(".irs-single").text()
  var noDollarBill = energyBill.slice(1)
  var kwUsagePerDay = (noDollarBill / pricePerKW) / 30.4 //kw/month
  //kw/month/squaremeter
  var kwPerDayPerSquareMeter = sunlightHours * kwPerSqMeter
  var requiredSizeinstall = Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
  var requiredSizeInstall = Math.round(kwUsagePerDay / sunlightHours)
  $('#recInstallSize').append('<h2>' + requiredSizeInstall + '</h2>' + '<p>Kilowatt system required</p>' +'<h2>' + requiredSizeinstall + '</h2>' + '<p>Meters squared required</p>')
}

var sunlightHours = 5.59

var pricePerKW = 0.28859

var kwPerSqMeter = 0.200

module.exports = KWGenerator