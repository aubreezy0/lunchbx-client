'use strict'
const store = require('../store')

// const signUpTemplate = require('../templates/sign-up.handlebars')
// const signInTemplate = require('../templates/sign-in.handlebars')
// const changePasswordTemplate = require('../templates/change-password.handlebars')
// const signOutTemplate = require('../templates/sign-out.handlebars')

const signUpSuccess = function () {
  // console.log('from signUpSuccess')
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000)
  $('.sign-up').addClass('hidden')
}

const signUpFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed to sign up!<br>Your username or email may be already registered.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000)
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  $('.modal').modal('hide')
  setTimeout(() => {
    $('#message').html('')
  }, 10000)
  $('.sign-up').addClass('hidden')
  $('.sign-in').addClass('hidden')
  $('.lunch-stuff').removeClass('hidden')
  store.user = data.user
  // store.user = data.user
  // const createFileUploadHandlebars = require('../templates/file-upload/create-file.handlebars')
  // const createFileUploadHTML = createFileUploadHandlebars()
}

const signInFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

const changePasswordSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully changed your password!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to change password</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signOutSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('.sign-up').removeClass('hidden')
  $('.sign-in').removeClass('hidden')
  $('.lunch-stuff').addClass('hidden')
  store.user = null
}

const signOutFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to sign out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 10000
  )
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
