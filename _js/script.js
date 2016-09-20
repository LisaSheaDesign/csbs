$(document).ready(function () {

  var event = {"show":
    {
      "name": "Blues Festival",
      "band": "Don Ho"
    }

}

  $(function(){
      $('.dropdown').hover(function() {
          $(this).addClass('open');
      }, function() {
          $(this).removeClass('open');
      });
  });

//less then 767px show mobile layout
  if (document.documentElement.clientWidth < 767) {

    	$(function () {
    		$('.moreBtn').click(function() {
    			$('.byLine').toggleClass('more');
    			$(this).html($(this).html() === 'more' ? 'less' : 'more');
      			return false;
    		});
    	}); // end moreBtn

    // function to open panel boxs for mobile
      var openBox = function(name,box) {
        //var name = n;
       $('.' + name + ' .' + box).slideToggle('more');
       $('.' + name + ' h2 span').html($('.' + name + ' h2 span').html() === '+' ? '-' : '+');
         return false;
      //console.log('.' + name + ' .box');
      };

    // events panel box
    $('.promoPanels').on('click', '.events h2', function() {
      openBox('events','promoBox');
    });

    // promo panel box
    $('.promoPanels').on('click', '.promo h2', function() {
      openBox('promo','promoBox');
    });

    // followInstagram panel box
    $('.socialWidgets').on('click', '.followInstagram h2', function() {
      openBox('followInstagram','instagramBox');
    });

    // followTwitter panel box
    $('.socialWidgets').on('click', '.followTwitter h2', function() {
      openBox('followTwitter','twitterBox');
    });

    // followFacebook panel box
    $('.socialWidgets').on('click', '.followFacebook h2', function() {
      openBox('followFacebook','facebookBox');
    });

  } // End of Doc width

}); // End Of Document
