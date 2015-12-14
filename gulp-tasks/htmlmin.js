'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html');

var config = require('./config');

gulp.task('htmlmin', ['wiredep', 'sass'], function () {
  var assets = useref.assets();

  var opts = {
    conditionals: true,
    loose: true
  };

  return gulp.src(config.src + '*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss({compatibility: 'ie7,ie8,*,+units.rem'})))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulpif('*.html', minifyHTML(opts)))
    .pipe(gulp.dest(config.dist));
});