var gulp = require('gulp'),
    rename = require('gulp-rename'),
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
