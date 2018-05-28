'use strict'
const store = require('../store')
const showRestaurantsTemplate = require('../templates/restaurant/show-restaurants.handlebars')

const addRestaurantSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You added a restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
  store.user = data.user
}

const addRestaurantFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">No soup for you!<br>Your restaurant was not added.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const udpateRestaurantSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully updated the restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const udpateRestaurantFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to update restaurant</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const deleteRestaurantSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully deleted the restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  $('#show').remove()
  // commenting out form trigger as now button
  // $('form').trigger('reset')
  setTimeout(() => {
    $('#show').html('')
  }, 10000
  )
}

const deleteRestaurantFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to delete restaurant</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const showRestaurantsSuccess = function (data) {
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: data.restaurants })
  console.log(data)
  $('#show').html('').append(showRestaurantsHtml)

  // $('#message').html(`<div class="alert alert-success" role="alert">Look at all these restaurants!</div>`)
  // $('#message').css('text-align', 'center')
  // $('form').trigger('reset')
  // setTimeout(() => {
  //   $('#message').html('')
  // }, 10000
  // )
}

const showRestaurantsFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert"> Nothing to look at here.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

module.exports = {
  addRestaurantSuccess,
  addRestaurantFailure,
  udpateRestaurantSuccess,
  udpateRestaurantFailure,
  deleteRestaurantSuccess,
  deleteRestaurantFailure,
  showRestaurantsSuccess,
  showRestaurantsFailure
}
