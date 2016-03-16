import $ from 'jquery'
import { energyBill, sunlightHours, pricePerKW, kwPerSqMeter } from './preferences'

const kWGenerator = (kwUsagePerDay, sunlightHours, kwPerSqMeter) => {
  //kw/month/squaremeter
  var kwPerDayPerSquareMeter = sunlightHours * kwPerSqMeter
  var requiredSizeinstall = Math.round(kwUsagePerDay / kwPerDayPerSquareMeter)
  var installSize = kwUsagePerDay / sunlightHours
  var requiredSizeInstall = Math.round(installSize * 100) / 100
  return requiredSizeInstall
}

export default kWGenerator

// $('#recInstallSize').append('<div id="recInstallText">' + requiredSizeInstall + 'kW </div>' +'<div id="recInstallSizeText">(' + requiredSizeinstall + '  square meters)')
