var notifier = require('./common/notifier');
var validator = require('./common/validator');
var signup = require('./forms/signup');

window.blah = function(message) {
  notifier.error(message);
}

window.validator = validator;

window.signup = signup;