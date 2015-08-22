'use strict';

var gulp = require('gulp');

gulp.task('copyIndex', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});
