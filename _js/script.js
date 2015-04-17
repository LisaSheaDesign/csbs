$(document).ready(function () {


$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});



	if (document.documentElement.clientWidth < 767) {

	$(function () {
		$('.moreBtn').click(function() {
			$('.byLine').toggleClass('more');
			$(this).html($(this).html() == 'more' ? 'less' : 'more');
  			return false;
	
		});
	
	}); // end moreBtn
	
	$(function () {
		$('.events h2').click(function() {
		$('.events .promoBox').slideToggle('more');
		$('.events h2 span').html($('.events h2 span').html() == '+' ? '-' : '+');
  		return false;
	
		});
	
	}); // end events h2

	$(function () {
		$('.promo h2').click(function() {
		$('.promo .promoBox').slideToggle('more');
			$('.promo h2 span').html($('.promo h2 span').html() == '+' ? '-' : '+');
  			return false;
	
		});
	
	}); // end promo h2
	
	$(function () {
		$('.followInstagram h2').click(function() {
		$('.followInstagram .instagramBox').slideToggle('more');
			$('.followInstagram h2 span').html($('.followInstagram h2 span').html() == '+' ? '-' : '+');
  			return false;
	
		});
	
	}); // end followInstagram h2
	
	$(function () {
		$('.followTwitter h2').click(function() {
		$('.followTwitter .twitterBox').slideToggle('more');
			$('.followTwitter h2 span').html($('.followTwitter h2 span').html() == '+' ? '-' : '+');
  			return false;
	
		});
	
	}); // end followTwitter h2
	
	$(function () {
		$('.followFacebook h2').click(function() {
		$('.followFacebook .facebookBox').slideToggle('more');
			$('.followFacebook h2 span').html($('.followFacebook h2 span').html() == '+' ? '-' : '+');
  			return false;
	
		});
	
	});  // end .followFacebook h2
	
	}

}); // End Of Document