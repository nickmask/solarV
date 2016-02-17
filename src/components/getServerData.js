var request = require('superagent')

function getData (path) {
  return new Promise (function (resolve, reject) {
    request
      .get(path)
      .end(function (err, res) {
        if (err) {
          reject(err)
        } else {
          console.log('Here is the res: ', res.text)
          resolve(res.text)
        }
     })
  })
}

// getData('http://localhost:3000/api/v1/address')
//   .then (function (data) {
//     console.log('We have data')
//   })

module.exports = getData
