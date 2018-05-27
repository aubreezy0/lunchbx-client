'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.signUpFailure)
  console.log('data is')
}

const addHandlers = () => {
  $('body').on('submit', '.sign-up', onSignUp)
}

module.exports = {
  addHandlers
}
