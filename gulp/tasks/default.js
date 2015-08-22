'use strict';

// Run connect and watch tasks by default

var gulp = require('gulp');

gulp.task('default', function () {
    gulp.start('connect', 'watch');
});
