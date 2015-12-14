'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var config = require('./config');

gulp.task('build', ['clean'], function() {
  gulp.start('dist');
});

gulp.task('dist', [
  'copy',
  'htmlmin',
  'imagemin'
]);

// serve the dist folder after generation to test it
gulp.task('serve-dist', ['build'], function() {
  browserSync({
    notify: false,
    port: config.port,
    open: false,
    server: {
      baseDir: [config.dist]
    }
  });
});