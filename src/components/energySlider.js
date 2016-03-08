var $ = require('jquery')

var energySlider = $("#energyBill").ionRangeSlider({
  min: 100,
  max: 800,
  from: 500,
  prefix: "$",
  step: 10,
  onChange: function (data) {
  $('#recInstallSize').html('')
})

module.exports = energySlider