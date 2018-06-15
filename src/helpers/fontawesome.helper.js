var Handlebars = require('handlebars');
var fontawesome = require('@fortawesome/fontawesome');
var light = require('@fortawesome/fontawesome-pro-light').default;

fontawesome.library.add(light);

Handlebars.registerHelper('fontawesome-css', function () {
  return new Handlebars.SafeString(
    fontawesome.dom.css()
  )
})

Handlebars.registerHelper('fontawesome-icon', function (args) {
  console.log(args);
  return new Handlebars.SafeString(
    fontawesome.icon({ prefix: 'fal', iconName: args.hash.icon }).html
  )
})
