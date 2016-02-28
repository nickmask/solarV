var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes')
var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Routes being called from my routes.js
routes(app)

app.use(express.static('/Users/nick/workspace/solarv/public'))

app.listen(3000);
