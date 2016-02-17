var $ = require('jquery')

var userData = {}

module.exports = function () {
  $(document).ready(function () {
    $('#submit').submit(function (e) {
      e.preventDefault()
      userData.roofSize = $('#roofSize').val()
      userData.energyBill = $('#energyBill').val()
      userData.address = $('#address').val()
    })
  })
}
