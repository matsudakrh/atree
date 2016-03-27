var gulp = require("gulp");
var jade = require('gulp-jade');
var data = require('gulp-data');
var config = require('../config').option;



gulp.task('jade', function(){
    gulp.src( config.jade.src,
        { base: config.jade.base })
        .pipe( data( function (file) {
            return {
                'meta': require( config.meta.basePath )
            }
        }))
        .pipe(jade( config.jade.option ))
        .pipe(gulp.dest( config.jade.public ));
});

