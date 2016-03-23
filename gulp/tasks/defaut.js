var gulp = require("gulp");

gulp.task('default',
    [
        'library',
        'images',
        'external',
        'sass',
        'json',
        'jade',
        'jsx',
        'script',
        'watch',
        'server'
    ]
);