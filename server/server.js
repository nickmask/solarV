var express = require('express')
var app = express()
var fs = require('fs')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

app.get('/api/v1/address', function (req, res) {
  fs.writeFile('./data/data.json', 'utf8', function (err, data){
    res.send(JSON.parse(data))
    })
})


