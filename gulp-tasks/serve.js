'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = require('./config.json');

gulp.task('serve', ['sass', 'wiredep'], function() {
  browserSync({
    notify: false,
    port: config.port,
    open: false,
    server: {
      baseDir: [ config.src ]
    }
  });

  gulp.watch([
    config.src + '*.html',
    config.src + 'scripts/**/*.js',
    config.src + 'images/**/*',
    config.src + 'fonts/**/*'
  ]).on('change', reload);

  gulp.watch([
    config.src + 'styles/**/*.scss'
  ], ['sass']);

  gulp.watch('bower.json', ['wiredep']);
});