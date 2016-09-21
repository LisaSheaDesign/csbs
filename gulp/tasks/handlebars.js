var gulp = require('gulp'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars');

//handlebars
gulp.task('handlebars', function() {
var event = {

  "evt1":
    {
      "title": "4th of July - closed Monday July 4th",
      "text": "Please make appointments in advance."
    },
  "evt2":
    {
      "title": "Road Construction on Whitsett Ave",
      "text": 'Prepare to arrive a little earlier than normal due to road construction on Whitsett Ave, driveway into parking lot is still accessible. <a href="*" data-toggle="modal" data-target="#eModal">See map for details.</a>'
    }
  },
    options = {
    batch:['./src/partials']
  }

  var index = function() {
    gulp.src('./src/temps/index.hbs')
    .pipe(handlebars(event.evt1, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
  }

  var tempPage = function(src, place) {
    gulp.src('./src/temps/' + src + '.hbs')
    .pipe(handlebars(options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./' + place));
  }


var init = function() {
  index();
  tempPage('about', 'about-cstyles-barber-spa');
  tempPage('cast', 'cast-cstyles-barber-spa');
  tempPage('color', 'barber-spa-hair-color');
  tempPage('contact', 'contact-cstyles-barber-spa');
  tempPage('cuts', 'barber-spa-hair-cuts');
  tempPage('events', 'events-cstyles-barber-spa');
  tempPage('manicures', 'barber-spa-hair-manicures');
  tempPage('news', 'news-cstyles-barber-spa');
  tempPage('news-gent', 'news-cstyles-barber-spa/BestGentleman-The-Barber-Review-2012');
  tempPage('news-sanvalley', 'news-cstyles-barber-spa/San-Fernando-Valley-Business-Journal-2015');
  tempPage('news-valley', 'news-cstyles-barber-spa/Best-of-Valley-Village-Award-2014');
  tempPage('packages', 'barber-spa-packages');
  tempPage('photo', 'photos-cstyles-barber-spa');
  tempPage('services', 'barber-spa-services');
  tempPage('shaves', 'barber-spa-shaves');
}
  return init();

});
