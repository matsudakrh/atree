var gulp = require("gulp");
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');
var comb = require('gulp-csscomb');
var minify = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

var config = require('../config').path;
var option = require('../config').option;

//sassのコンパイル

gulp.task('sass', function(){
    gulp.src( config.sourceDir + 'sass/**/*.sass')
        .pipe(plumber( option.sass.error ))
        .pipe(sass())
        .pipe(cssnext( option.sass.cssnext ))
        .pipe(comb())
        .pipe(gulp.dest( config.publicDir + 'css'))
        .pipe(minify())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest( config.publicDir + 'css'));
});
