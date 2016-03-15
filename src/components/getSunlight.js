var knex = require('knex')
var request = require('super-agent')

function getSunlight (city) {
  request
    .get('/city/' + city)
    .end(function (err, res) {
      $('#recInstallSize').append('<h3>' + res.fy + '</h3>')
    })
    
  })
}

module.exports = getSunlight

