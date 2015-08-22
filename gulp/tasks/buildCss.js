'use strict';

// Compile sass and output css to /build/css
 
var gulp = require('gulp'),
    sass = require('gulp-sass');
 
gulp.task('buildCss', function () {
    gulp.src('./src/sass/application.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});
