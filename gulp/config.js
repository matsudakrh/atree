var baseConfig = {
    sourceDir: 'source/',
    publicDir: 'public/',
    root: 'public/',
    gulpRequireSource: '../../source/'
};

var notify = require('gulp-notify');

module.exports = {

    path: baseConfig,

    option: {
        server : {
            livereload: true,
            root: baseConfig.publicDir,
            port: 8080,
            open: false,
            directoryListing: false
        },
        meta: {
            basePath: baseConfig.gulpRequireSource + 'jade/data/'
        },
        sass: {
            error: {
                errorHandler: notify.onError("Error: <%= error.message %>")
            },
            prefix: {
                browser: ['last 2 version']
            }
        },
        jade: {
            base: baseConfig.sourceDir + 'jade',
            option: {
                pretty: true //インデントを維持
            }
        }
    }
};