'use strict';

// Build initial static site in /dist

var gulp = require('gulp');

gulp.task('build', ['buildJs', 'prefixCss', 'copyIndex', 'copyImg']);
