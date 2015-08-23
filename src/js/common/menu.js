'use strict';


var dom = require('./dom');


// Grab nav toggle
var navToggle = document.querySelector('.js-nav-toggle');
// Grab nav menu
var navMenu = document.querySelector('.js-nav-menu');
var isActive = false;

// Toggle menu on click
navToggle.addEventListener("click", function(event) {
    event.preventDefault();

    if(!isActive) {
        window.setTimeout(function() {
            dom.addClass(navToggle, 'is-closing');
            isActive = true;
        }, 110);
    } else {
        window.setTimeout(function() {
            dom.removeClass(navToggle, 'is-closing');
            isActive = false;
        }, 110);
    }

    dom.toggleClass(navMenu, 'is-active');
    dom.toggleClass(navToggle, 'is-active');

});