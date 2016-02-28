var $ = require('jquery')

var energySlider = $("#energySlider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
})

module.exports = energySlider