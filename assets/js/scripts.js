$(document).ready(function(){
	// Banner area
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true
	});
	// Twitter area
	$('.twiter-items').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false
	});
	// Mobile Menu
	$('.menu-icon').click(function(){
		$('.menu ul').slideToggle()
	});
	// magnificPopup
	$('.popup').magnificPopup({
  			type:'image',
  			gallery:{
  				enabled:true
  			}
  		});

});