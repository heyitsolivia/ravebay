'use strict';


var dom = require('./dom');


// Grab element
var el = document.querySelector('.js-notifier');

function error(message) {
    // Add .is-active to element
    dom.addClass(el, 'is-active');
    // Update the message
    el.innerHTML = message;
    // Set timeout to hide error
    window.setTimeout(hideError, 1000);
}

function hideError() {
    // trigger closing animation and hiding element
    dom.addClass(el, 'is-closing');

    window.setTimeout(function(){
        window.setTimeout(function(){
            dom.removeClass(el, 'is-closing');
        }, 250);
        dom.removeClass(el, 'is-active');
    }, 500);
}

module.exports = {
    error: error
};
