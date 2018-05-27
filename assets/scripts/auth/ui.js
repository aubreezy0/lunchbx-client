'use strict'
// const store = require('../store')

const signUpSuccess = function () {
  console.log('from signUpSuccess')
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signUpFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed to sign up!<br>Your username or email may be already registered.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
