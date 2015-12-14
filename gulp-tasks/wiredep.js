'use strict';

var gulp = require('gulp');

var config = require('./config').projectPaths;

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src(config.src + 'index.html')
    .pipe(wiredep({
      bowerJson: require('../bower.json'),
    }))
    .pipe(gulp.dest(config.src));
});