var $ = require('jquery')
var KWGenerator = require('./recInstall')

module.exports = function () {
      $("#energyBill").ionRangeSlider({
        min: 100,
        max: 800,
        from: 450,
        prefix: "$",
        step: 10,
        onChange: function (data) {
        $('#recInstallSize').html('')
        KWGenerator()
        }
    })
}