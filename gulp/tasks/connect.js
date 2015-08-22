'use strict';
 
var gulp = require('gulp'),
    connect = require('gulp-connect');
 
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: 4000
    });
});
 
gulp.task('default', ['connect']);
