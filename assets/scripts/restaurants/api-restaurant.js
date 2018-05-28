'use strict'
const config = require('../config')
const store = require('../store')

const addRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    header: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateRestaurant = function (data) {
  console.log('api data is ', data)
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  addRestaurant,
  updateRestaurant
}
