// include gulp
var gulp = require('gulp');

// plugins
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

// uglify js and css
gulp.task('compress', function() {
  return gulp.src('_js/script.js')
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('_js/min'));
});

gulp.task('cssmin', function(){
  return gulp.src('_css/main.css')
  .pipe(cssmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('_css/min'));
})

gulp.task('default',['compress', 'cssmin']);
