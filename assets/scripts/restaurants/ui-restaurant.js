'use strict'
// const store = require('../store')
const showRestaurantsTemplate = require('../templates/restaurant/mvp-show-restaurants.handlebars')

const addRestaurantSuccess = function (data) {
  // console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You added a restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
  // store.user = data.user
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
  // console.log(data)
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
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  $('form').trigger('reset')
  $('#no-show').html('')
  setTimeout(() => {
    $('#show').html('')
  }, 50
  )
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const deleteRestaurantSuccess = function (data) {
  // console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully deleted the restaurant!</div>`)
  $('#message').css('text-align', 'center')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  // $('#show').remove()
  // commenting out form trigger as now button
  $('form').trigger('reset')
  $('#no-show').html('')
  setTimeout(() => {
    $('#show').html('')
  }, 50
  )
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const deleteRestaurantFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to delete restaurant</div>`)
  $('#message').css('text-align', 'center')
  $('#no-show').html('')
  setTimeout(() => {
    $('#show').html('')
  }, 50
  )
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const showRestaurantsSuccess = function (data) {
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: data.restaurants })
  // console.log(data)
  $('#no-show').html('')
  $('#show').html('').append(showRestaurantsHtml)
  if (data.restaurants.length === 0) {
    $('#no-show').html('Nothing here yet. Add a restaurant to your collection to get started!')
  }

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
  $('#no-show').html('')
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
