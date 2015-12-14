'use strict';

var gulp = require('gulp'),
    del = require('del');
    
var config = require('./config');

gulp.task('clean', function () {
  return del([
    config.src + 'css',
    config.dist
  ], {force: true});
});