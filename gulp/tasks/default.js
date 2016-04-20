var gulp = require('gulp');
var livereload = require('gulp-livereload');

var config_watch = require('../config').watch;

//Watch source task
gulp.task('default', ['latex'], function() {
  livereload.listen();
  gulp.watch(config_watch.src, ['latex']);
});