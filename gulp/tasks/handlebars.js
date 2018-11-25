var gulp = require('gulp'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars');

//handlebars
gulp.task('temps', function() {
//object for promo panel on index page
var promoPanels = {
  "event": [
    {
      "title": "Thanksgiving Day Closed",
      "text": "Day after 23rd open 12-5pm. Regular hours on Saturday 24th"
    },
    {
      "title": "Christmas Day Closed",
      "text": "24th Eve open 11-5pm and day after 26th open 12-6pm. Regular business hours resume on 27th"
    },
    {
      "title": "New Year’s Day Closed",
      "text": "31st Eve 11-5pm and day after 2nd open 12-6pm. Regular business hours resume on January 3rd"
    }
  ],
  "promo": [
    {
      "title": "Specials",
      "text": "10% off for Senior citizens 65+"
    },
    {
      "title": null,
      "text": "\"Wigs for Kids\" We will cut and donate your hair for a great cause. Must be at least 10 inches long"
    }
  ]
},
    options = {
    batch:['./src/partials']
  }
//create index and put promo data on page
  var index = function() {
    gulp.src('./src/temps/index.hbs')
    .pipe(handlebars(promoPanels, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
  }
//create template pages
  var tempPage = function(src, place) {
    gulp.src('./src/temps/' + src + '.hbs')
    .pipe(handlebars(options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./' + place));
  }
//create template pages put in dest directory
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
  tempPage('nail-waxing', 'barber-spa-nail-waxing');
  tempPage('photo', 'photos-cstyles-barber-spa');
  tempPage('services', 'barber-spa-services');
  tempPage('shaves', 'barber-spa-shaves');
}
  return init();
});
