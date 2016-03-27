var gulp = require("gulp");

gulp.task('default',
    [
        'library',
        'config',
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