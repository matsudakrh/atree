var gulp = require("gulp");
var config = require('../config').path;


gulp.task( 'library', function () {
    gulp.src([
        'node_modules/react/**/react.min.js',
        'node_modules/react-dom/**/react-dom.min.js',
        'node_modules/jquery/**/jquery.min.js'
    ])
        .pipe(gulp.dest( 'external/js' ));
});