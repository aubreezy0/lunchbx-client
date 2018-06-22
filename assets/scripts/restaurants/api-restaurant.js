'use strict'
const config = require('../config')
const store = require('../store')

const addRestaurant = function (data) {
  // console.log('token is ' + store.user.token)
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateRestaurant = function (data) {
  // console.log('api data is ', data)
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

const deleteRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showRestaurants = function (data) {
  // console.log('show all projects ran')
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET',
    data
  })
}

// For eventual randomizer -- update!
const pickRestaurant = function (data) {
  // return $.ajax({
  //   url: config.apiUrl + '/restaurants',
  //   headers: {
  //     contentType: 'application/json',
  //     Authorization: 'Token token=' + store.user.token
  //   },
  //   method: 'GET',
  //   data
  // })
}

module.exports = {
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  showRestaurants,
  pickRestaurant
}
