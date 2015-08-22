'use strict';

// Watch changes to files to run tasks

var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['prefixCss']);
    gulp.watch('./src/js/**/*.js', ['buildJs']);
    gulp.watch('./src/index.html', ['copyIndex']);
    gulp.watch('./src/img/**/*.*', ['copyImg']);
});
