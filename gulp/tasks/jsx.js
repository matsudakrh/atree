var gulp = require("gulp");
var react = require('gulp-react');
var config = require('../config').path;

//JavaScript
gulp.task('jsx', function(){
    gulp.src( config.sourceDir + 'js/**/*.jsx' )
        .pipe(react())
        .pipe(gulp.dest(config.publicDir + 'js'));
});