var gulp = require('gulp'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars');

//handlebars
gulp.task('temps', function() {
//object for promo panel on index page
var promoPanels = {
  "event": [
    {
      "title": "Barber Spa OPEN at 25% capacity",
      "text": null,
    }
  ],
  "promo": [
    {
      "title": null,
      "text": "As of September 3rd Christopher Styles Barber Spa will reopen its doors at a 25% capacity. We will continue to serve our clients but stylist and barbers will have limited schedules. Please give us a call and we will contact stylist for availability. Thank you again for your patience and understanding during this process of reopening. We want to ensure our stylist safety as well as yours so all county and state guild lines with be strictly followed."
    },
    {
      "title": null,
      "text": "All prices are determined by each individual stylist. Prices may vary depending on your stylist experience. "
    },
    {
      "title": null,
      "text": null
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
  tempPage('polices', 'barber-spa-polices');
  tempPage('book', 'barber-spa-book');
}
  return init();
});
