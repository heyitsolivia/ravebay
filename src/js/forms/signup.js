'use strict';


var validator = require('../common/validator');
var notifier = require('../common/notifier');


// Grab submit button
var submit = document.querySelector('.js-form-submit');

// Validate form on submit
submit.addEventListener("click", function(event) {
    event.preventDefault();
    var errorMessage = validateForm();

    // Call notifier if there is an error message to show

    if (!validator.isEmpty(errorMessage)) {
        notifier.error(errorMessage);
    }

});

// Form Validation
function validateForm() {
    var username = document.querySelector('.js-form-username').value;
    var password = document.querySelector('.js-form-password').value;

    // Return error messages for each validation case

    if (validator.isEmpty(username)) {
        return 'Please enter a username.';
    } else if (validator.isEmpty(password)) {
        return 'Please enter a password';
    } else if (!validator.atLeast(password, 6)) {
        return 'Your password needs at least 6 characters';
    } else if (!validator.hasUppercase(password)) {
        return 'Your password needs at least one uppercase letter.'
    } else if (!validator.hasSpecial(password)) {
        return 'Your password needs at least one special character.'
    }
}

// Grab reveal button
var reveal = document.querySelector('.js-form-reveal');

// Toggle between input types to reveal/hide password
reveal.addEventListener("click", function( event ) {
    // Grab password
    var input = document.querySelector('.js-form-password');
    // Toggle input type depending on current type attribute
    var type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    // Set input type
    input.setAttribute('type', type);

});


module.exports = {
    validateForm: validateForm
};
