// include gulp
var gulp = require('gulp');

// plugins
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var hb = require('gulp-hb');

//handlebars
gulp.task('hb', function () {
    return gulp
        .src('./src/{,posts/}*.html')
        .pipe(hb({
            partials: './src/assets/partials/**/*.hbs',
            helpers: './src/assets/helpers/*.js',
            data: './src/assets/data/**/*.{js,json}'
        }))
        .pipe(gulp.dest('./web'));
        console.log('work');
});

//clean out min dir
gulp.task('clean-css', function() {
  return gulp.src('_css/min/main.min.css')
  .pipe(clean());
  console.log('clean your fired');
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

//watch js and css files
gulp.task('watch', function() {
  gulp.watch('_css/main.css', ['cssmin']);
  gulp.watch('_js/script.js', ['jsmin']);
});

gulp.task('default',['jsmin', 'cssmin', 'watch']);
