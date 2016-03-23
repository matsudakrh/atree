var gulp = require("gulp");
var minify = require('gulp-cssmin');
var rename = require('gulp-rename');
var config = require('../config').path;

gulp.task( 'external', function () {
    gulp.src('external/css/**/*')
        .pipe(minify())
        .pipe(gulp.dest( config.publicDir + 'css/' ));
    gulp.src('external/js/**/*.js')
        .pipe(gulp.dest( config.publicDir + 'js/' ));
});