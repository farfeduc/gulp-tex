var gulp = require('gulp');
var latex = require('gulp-latex');
var livereload = require('gulp-livereload');

var config_latex = require('../config').latex;

//Compile and deplay
gulp.task('latex',function() {
  return gulp.src(config_latex.src)
    .pipe( latex() )
    .pipe( gulp.dest(config_latex.dest) ) 
    .pipe(livereload());
});