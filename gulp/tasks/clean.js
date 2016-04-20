var gulp = require('gulp');
var del = require('del');

var config_clean = require('../config').clean;

// Clean task
gulp.task('clean', function() {
  return del(config_clean.files);
});