'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['buildCss']);
    gulp.watch('./build/css/**/*.css', ['prefixCss']);
    gulp.watch('./src/js/**/*.js', ['buildJs']);
    gulp.watch('./src/index.html', ['copyIndex']);
});
