var gulp = require("gulp");
var minify = require('gulp-cssmin');
var rename = require('gulp-rename');
var config = require('../config').option;

gulp.task( 'external', function () {
    gulp.src('external/css/**/*')
        .pipe(minify())
        .pipe(gulp.dest( config.sass.public ));
    gulp.src('external/js/**/*.js')
        .pipe(gulp.dest( config.external.publicJS ));
});