'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui-restaurant')
const api = require('./api-restaurant')

const onAddRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.addRestaurant(data)
    .then(ui.addRestaurantSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.addRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updateRestaurant(data)
    .then(ui.udpateRestaurantSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.udpateRestaurantFailure)
}

const addHandlers = () => {
  $('body').on('submit', '.add-restaurant', onAddRestaurant)
  $('body').on('submit', '.update-restaurant', onUpdateRestaurant)
}

module.exports = {
  addHandlers
}
