var gulp = require("gulp");
var config = require('../config').path;

//画像のコピー
gulp.task('images', function(){
    gulp.src( config.sourceDir + 'images/**/*')
        .pipe(gulp.dest( config.publicDir + 'images'));
});
