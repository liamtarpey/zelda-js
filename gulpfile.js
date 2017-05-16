// NPM modules
var gulp        = require('gulp');
var del         = require('del');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var iife        = require('gulp-iife');
var browserSync = require('browser-sync');
var babel       = require('babelify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var gutil       = require('gulp-util');
var runSequence = require('run-sequence');


// All file paths
var PATHS = {
    scripts: {
        src: {
            libs: [
                './src/scripts/libs/phaser.js'
            ],
            modules: [
                './src/scripts/constants.js',
                './src/scripts/services/link.service.js',
                './src/scripts/services/state.service.js',
                './src/scripts/services/audio.service.js',
                './src/scripts/services/keys.service.js',
                './src/scripts/services/image.service.js',
                './src/scripts/init.js'
            ]
        },
        dest: './dist/scripts/'
    }
};

var cleanTask = function() {
    return del.sync(PATHS.scripts.dest);
};

gulp.task('clean', cleanTask);

// Copy libs
var copyLibs = function() {
    return gulp.src(PATHS.scripts.src.libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(PATHS.scripts.dest))
        .pipe(uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest(PATHS.scripts.dest));
};

// Copy scripts
var copyModules = function() {
    var appBundler = browserify({
    	entries: PATHS.scripts.src.modules,
    	debug: true
  	}).transform('babelify', {
        presets: ['es2015']
    })
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(PATHS.scripts.dest));
};

gulp.task('copy-libs', copyLibs);
gulp.task('copy-modules', copyModules);
gulp.task('copy', ['copy-libs', 'copy-modules']);

// BrowserSync
var serve = function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
};

gulp.task('serve', serve);

// Watch
var watch = function() {
    gulp.watch(PATHS.scripts.src.modules, ['copy-modules']).on('change', browserSync.reload);
};

gulp.task('watch', watch);

// Default gulp task
gulp.task('default', function() {
    runSequence(
        'clean',
        'copy',
        'serve',
        'watch'
    );
});
