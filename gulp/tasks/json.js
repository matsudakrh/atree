var gulp = require("gulp");
var config = require('../config').path;

gulp.task( 'json', function () {
    gulp.src( config.sourceDir + 'json/**.json' )
    .pipe( gulp.dest( config.publicDir + 'json' ));
});