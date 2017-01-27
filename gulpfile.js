// include gulp
var gulp = require('gulp');
var requireDir = require('require-dir')('./gulp/tasks');

//watch js and css files
gulp.task('watch', function() {
  gulp.watch('_css/main.css', ['cssmin']);
  gulp.watch('_js/script.js', ['jsmin']);
  gulp.watch('../**/*.hbs', ['temps', 'reload']);
});

gulp.task('build',['jsmin', 'cssmin', 'watch', 'connect', 'temps']);
