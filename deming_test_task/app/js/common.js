$( document ).ready(function(){
	
	if($(window).width() > 768){
		function navLiWidth(){
			var containerW  = $('.container').width() - 32;
			var li = $('.navbar-nav > li');
			li.width(containerW / li.length)
		};
		navLiWidth();
	}

	var owlPaginationCounter = 1;

	$('#news-slider').owlCarousel({
    items : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : [500,1],
    navigation : true,
    pagination: true,
    dots: true
  });

  	$('#news-slider .owl-page span').each(function() {
  	this.innerHTML = owlPaginationCounter++
  });

});

function mnuFunc(){
	$('.mobile-mnu').toggleClass('active');
	$('.cover-body').fadeToggle(300);
}

$('.navbar-toggle').click(function(){
	mnuFunc();
});

$('.close-btn').click(function(){
	mnuFunc();
});

$('.cover-body').click(function(){
	mnuFunc();
});

