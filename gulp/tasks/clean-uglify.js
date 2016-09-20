var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

//clean out min dir
gulp.task('clean-css', function() {
  return gulp.src('_css/min/main.min.css')
  .pipe(clean());
});

gulp.task('clean-js', function() {
  return gulp.src('_js/min/script.min.js')
  .pipe(clean());
});

// uglify js
gulp.task('jsmin', ['clean-js'], function() {
  return gulp.src('_js/script.js')
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('_js/min'));
});

// compress css
gulp.task('cssmin', ['clean-css'], function(){
  return gulp.src('_css/main.css')
  .pipe(cssmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('_css/min'));
});
