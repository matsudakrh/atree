var gulp = require("gulp");
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
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
        .pipe(prefix( option.sass.prefix )) //ベンダープレフィクスを自動付与
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(comb())
        .pipe(minify())
        .pipe(gulp.dest( config.publicDir + 'css'));
});
