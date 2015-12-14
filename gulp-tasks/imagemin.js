'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

var config = require('./config');

gulp.task('imagemin', function () {
  return gulp.src(config.src + 'images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dist + 'images'));
});