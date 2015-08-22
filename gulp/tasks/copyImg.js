'use strict';

// Copy images from /src/img to /dist/img

var gulp = require('gulp');

gulp.task('copyImg', function () {
    gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});
