(function() {
  var baseConfig, notify;

  baseConfig = {
    sourceDir: 'source/',
    publicDir: 'public/',
    root: 'public/',
    gulpRequireSource: '../../source/'
  };

  notify = require('gulp-notify');

  module.exports = {
    path: baseConfig,
    option: {
      external: {
        publicJS: baseConfig.publicDir + 'js/'
      },
      server: {
        livereload: true,
        root: baseConfig.publicDir,
        port: 8080,
        open: false,
        directoryListing: false
      },
      meta: {
        basePath: baseConfig.gulpRequireSource + 'jade/data/meta.json'
      },
      sass: {
        "public": baseConfig.publicDir + 'css/',
        source: baseConfig.sourceDir + 'sass/**/*.sass',
        cssnext: {
          browser: 'last 2 versions',
          features: {
            customProperties: false,
            calc: true,
            customMedia: false,
            mediaQueriesRange: false,
            autoprefixer: true,
            "import": true
          }
        }
      },
      jade: {
        src: [baseConfig.sourceDir + 'jade/**/*.jade', '!' + baseConfig.sourceDir + 'component/*.jade'],
        "public": baseConfig.publicDir,
        base: baseConfig.sourceDir + 'jade/',
        option: {
          pretty: true
        }
      }
    }
  };

}).call(this);
