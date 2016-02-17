var request = require('superagent')

function postData (path, data) {
  return new Promise (function (resolve, reject) {
    request
      .post(path)
      .send()
      .end(function (err, res) {
        if (err) {
          reject(err)
        } else {
          console.log('Here is the res: ', res.text)
          resolve(res)
        }
     })
  })
}

postData('http://localhost:3000/api/v1/address')
  .then (function (data) {
    console.log('We have data')
  })

module.exports = getData