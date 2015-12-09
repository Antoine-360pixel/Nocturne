var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var plugins = require('gulp-load-plugins')();

gulp.task('styles', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer({ browsers: ['last 2 versions', "> 1%"] }) )
        .pipe(plugins.minifyCss({compatibility: 'ie7,ie8,*,+units.rem'}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['styles'], function(){
    browserSync.init({
        server: "./"
    });

    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch([
        '*.html',
        'scripts/**/*.js',
        'assets/**/*',
        'fonts/**/*',
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);