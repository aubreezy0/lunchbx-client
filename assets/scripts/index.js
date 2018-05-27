'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
// const fileUploadEvents = require('./fileupload/fileuploadevents')

// const navHandlebars = require('./templates/nav.handlebars')
// const navHTML = navHandlebars()

// const homePageHandlebars = require('./templates/homepage.handlebars')
// const homePageHTML = homePageHandlebars()

// const footerHandlebars = require('./templates/footer.handlebars')
// const footerHTML = footerHandlebars()

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  // fileUploadEvents.addHandlers()
  // // $('body').prepend(navHTML)
  // $('body').append(homePageHTML)
  // $('body').on('click', '.nav-tabs a', function (e) {
  //   e.preventDefault()
  //   $(this).tab('show')
  // })
  // $('.navbar').remove()
  // $('body').append(footerHTML)
})
