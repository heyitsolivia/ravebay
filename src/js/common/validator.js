'use strict';


// Validate existence
function exists(text) {
    return text !== undefined && text !== null;
}

// Validate whether string is empty
function isEmpty(text) {
    return !exists(text) || text.length === 0;
}

// Validate whether greater or equal to given length
function atLeast(text, length) {
    return exists(text) && text.length >= length;
}

// Validate whether has at least one uppercase letter

function hasUppercase(text) {
    var regex = /[A-Z]/;
    return exists(text) && regex.test(text);
}

// Validate whether has at least one non-alphanumeric character

function hasSpecial(text) {
    var regex = /[^a-zA-Z0-9]/;
    return exists(text) && regex.test(text);
}

module.exports = {
    isEmpty: isEmpty,
    exists: exists,
    atLeast: atLeast,
    hasUppercase: hasUppercase,
    hasSpecial: hasSpecial
};
