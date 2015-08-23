'use strict';


var dom = require('../common/dom');
var validator = require('../common/validator');
var notifier = require('../common/notifier');


// Grab submit button
var submit = document.querySelector('.js-form-submit');
var input_username = document.querySelector('.js-form-username');
var input_password = document.querySelector('.js-form-password');

// Validate form on submit
submit.addEventListener("click", function(event) {
    event.preventDefault();

    var usernameError = validateUsername();
    var passwordError = validatePassword();

    var hasError = false;

    // Call notifier if there is an error message to show and highlight input

    if (validator.isEmpty(usernameError)) {
        dom.removeClass(input_username, 'is-error');
    } else {
        notifier.error(usernameError);
        hasError = true;
        dom.addClass(input_username, 'is-error');
    }

    if (validator.isEmpty(passwordError)) {
        dom.removeClass(input_password, 'is-error');
    } else {
        if (!hasError) {
            notifier.error(passwordError);
        }
        dom.addClass(input_password, 'is-error');
    }
});

// Validate Username
function validateUsername() {
    var username = input_username.value;

    // Return error messages for each validation case

    if (validator.isEmpty(username)) {
        return 'Please enter a username.';
    }
}

// Validate Password
function validatePassword() {
    var password = input_password.value;

    // Return error messages for each validation case

    if (validator.isEmpty(password)) {
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
    // Toggle input type depending on current type attribute
    var type = input_password.getAttribute('type') === 'password' ? 'text' : 'password';
    // Set input type
    input_password.setAttribute('type', type);

});
