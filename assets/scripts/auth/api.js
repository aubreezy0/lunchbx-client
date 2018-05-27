'use strict'
const config = require('../config')
// const store = require('../store')

const signUp = function (data) {
  console.log('in the api request data is:', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    header: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  signUp
}
