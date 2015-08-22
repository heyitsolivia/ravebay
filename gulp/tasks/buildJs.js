'use strict';

var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify');

gulp.task('buildJs', function () {
    return browserify('./src/js/application.js').bundle()
        .pipe(source('application.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/js'));
});
