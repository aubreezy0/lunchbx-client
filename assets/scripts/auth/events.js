'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { fileEvents.onGetFileUploadNoEvent() })
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('body').on('submit', '.sign-up', onSignUp)
  $('body').on('submit', '.sign-in', onSignIn)
  $('body').on('submit', '.change-password', onChangePassword)
  $('body').on('click', '.sign-out', onSignOut)
}

module.exports = {
  addHandlers
}
