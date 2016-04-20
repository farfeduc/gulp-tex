var gulp = require('gulp');

var config_watch = require('../config').watch;

//Watch source task
gulp.task('watch', ['latex'], function() {
  gulp.watch(config_watch.src, ['latex']);
});