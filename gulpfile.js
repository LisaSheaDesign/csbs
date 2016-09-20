// include gulp
var gulp = require('gulp');

// plugins
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    handlebars = require('gulp-compile-handlebars');

//handlebars
gulp.task('handlebars', function() {
  var event = {"show":
    {
      "name": "Rock Festival",
      "band": "GNR"
    }
},
  options = {
    batch:['./_includes']
  }

  var index = function() {
    gulp.src('./index.hbs')
    .pipe(handlebars(event.show, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
  }

  var about = function() {
    gulp.src('about-cstyles-barber-spa/index.hbs')
    .pipe(handlebars(options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./about-cstyles-barber-spa'));
  }


var init = function() {
  index();
  about();
}
  return init();

});

//connect
gulp.task('connect', function() {
  connect.server();
});

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

//watch js and css files
gulp.task('watch', function() {
  gulp.watch('_css/main.css', ['cssmin']);
  gulp.watch('_js/script.js', ['jsmin']);
  gulp.watch('../**/*.hbs', ['handlebars']);
});

gulp.task('build',['jsmin', 'cssmin', 'watch', 'connect']);
