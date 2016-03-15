var $ = require('jquery')
var listen = require('./components/listen')
var KWGenerator = require('./components/recInstall')
var slider = require('./components/entry')
var mapAutoComplete = require('./components/mapAutoComplete')
var energySlider = require('./components/energySlider')

$(document).ready( function () {
      slider()
      energySlider()
      mapAutoComplete()
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