var Handlebars  = require('handlebars');
var fontawesome = require('@fortawesome/fontawesome');
var light       = require('@fortawesome/fontawesome-pro-light').default;

// Adds all the icons from the Solid style into our library for easy lookup
fontawesome.library.add(light)

Handlebars.registerHelper('fontawesome-css', function () {
  return new Handlebars.SafeString(
    fontawesome.dom.css()
  )
})

Handlebars.registerHelper('fontawesome-icon', function (args) {
  return new Handlebars.SafeString(
    fontawesome.icon({ prefix: 'fas', iconName: args.hash.icon }).html
  )
})
