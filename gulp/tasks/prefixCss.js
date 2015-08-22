'use strict';

// Add vendor prefixes to build step of css, output to /dist/css

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('prefixCss', function () {
    return gulp.src('./build/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
});
