var Handlebars  = require('handlebars');
var fontawesome = require('@fortawesome/fontawesome-pro');

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
