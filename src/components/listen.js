var $ = require('jquery')

module.exports = function (callback) {
  
  $('#submit').click(function () {
    var userData = {}
    userData.roofSize = $('#roofSize').val()
    userData.energyBill = $('#energyBill').val()
    userData.address = $('#address').val()
    callback('http://localhost:3000/api/v1/addUserData', userData)
    console.log(userData)


  })
}
