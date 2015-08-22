'use strict';

var gulp = require('gulp');

gulp.task('default', function () {
    gulp.start('connect', 'watch', 'browser-sync');
});
