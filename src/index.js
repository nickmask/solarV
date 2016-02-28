var $ = require('jquery')
var listen = require('./components/listen')
var KWGenerator = require('./components/recInstall')
var slider = require('./components/entry')
// var energySlider = require('./components/energySlider')
$(document).ready(function () {
      slider()
      $("#energyBill").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 500,
        prefix: "$",
        step: 10,
        onChange: function (data) {
        $('#recInstallSize').html('')
        KWGenerator()
        }
    })
})

  // energySlider()


// },
//     })
//     $('#energyBill').trigger("change", function () {
//     console.log('Changing!')
//     KWGenerator()
//   })
// })

// requestData(address)
//   .then(function (data) {

//   })