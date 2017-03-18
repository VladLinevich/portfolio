if( $(window).width() > 768) {
								jQuery('ul.nav > li').hover(function() {
			    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).css({display: 'block'});
			}, function() {
			    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).css({display: 'none'});
			})
	}

	$(document).ready(function($) {

		var owl = $("#owl-demo");
		var owlPaginationCounter = 1;

  owl.owlCarousel({
    items : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : [500,1],
    navigation : false,
    navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
    pagination: true,
    dots: true
  });

  $('#owl-propositions').owlCarousel({
    items : 5,
    itemsDesktop : [1200,4],
    itemsDesktopSmall : [990,3],
    itemsTablet: [600,2],
    itemsMobile : [450,1],
    navigation : true,
    navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
    pagination: false,
  });

  $('#owl-demo .owl-page span').each(function() {
  	this.innerHTML = owlPaginationCounter++
  });

	});