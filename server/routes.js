'use strict'
var exphbs  = require('express-handlebars')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    if (req.query)
    var ref = req.query.ref
    var roofsize = req.query.roofsize
    var energyBill = req.query.energyBill
    var address = req.query.address
    console.log(ref,roofsize,energyBill,address)
    res.render('home')
  })

  app.get('/about', function (req, res) {
    res.render('about')

  })

  app.get('/city/:city', function (req, res) {
    var city = req.query.city
      knex('sunshine').where({location: city}).then(function (resp) {

      })
    })
}
