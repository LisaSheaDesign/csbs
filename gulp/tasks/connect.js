var gulp = require('gulp'),
    connect = require('gulp-connect');

//connect
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src(['../**/*.html'])
    .pipe(connect.reload());
});
