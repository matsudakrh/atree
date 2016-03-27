var gulp = require("gulp");
var requireDir = require('require-dir');
var coffee = require('gulp-coffee');


gulp.task( 'config', function () {
    gulp.src('gulp/config/config.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('gulp/'));
});


requireDir('./gulp/tasks', {recurse: true});