// NPM modules
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync');

// All file paths
var PATHS = {
    scripts: {
        src: {
            libs: [
                './src/scripts/libs/phaser.js'
            ],
            modules: [
                './src/scripts/modules/init.js',
                './src/scripts/modules/**/*.js'
            ]
        },
        dest: './dist/scripts/'
    }
};

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
    return gulp.src(PATHS.scripts.src.modules)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(PATHS.scripts.dest))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
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
gulp.task('default', ['copy', 'serve', 'watch']);
