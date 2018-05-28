'use strict'
const store = require('../store')

const addRestaurantSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">You added a restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = data.user
}

const addRestaurantFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">No soup for you!<br>Your restaurant was not added.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

module.exports = {
  addRestaurantSuccess,
  addRestaurantFailure
}
