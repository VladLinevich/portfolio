$( document ).ready(function(){

});

function openCallBack(){
	$('#call-back').fadeToggle(400);
	$('.back-call-back-form').fadeToggle(400);
}

$( window ).scroll(function(){

	var elem  = $('.map-container');
	var windowHeight = $(window).scrollTop()+$(window).height();
	var mapBottom = (elem.offset().top) + elem.height();

	if( windowHeight >= mapBottom){
		countNumbers()
	}

});


$('a[href="#call-back"]').click(function() {
	openCallBack();
});

$('.close-form').click(function() {
	openCallBack();
});

$('.back-call-back-form').click(function() {
	openCallBack();
});



$('.button-up-container').click(function() {
	$('body, html').animate({scrollTop:0}, '900')
});


function removeImgActive(){
	$('.img-features > img').removeClass('active')
}

function scrollDown(){
	$("html, body").animate({ scrollTop: $('.features-block-container').offset().top }, 900);
}


function imgVisible(){

	$('.item').hover(function(){

		removeImgActive()

		var dataAttr = $(this).attr('data-number');
		var hrefAttr = $(this).find('a').attr('href');
		var elemImg = $('.img-features').children('#'+ dataAttr +'');

		$('.img-features .center-more a').attr('href', hrefAttr);
		elemImg.addClass('active');

	});

}

$('.button-down').click(scrollDown);

function countNumbers(){

	var bigObj = Number($('#big-object').text()),
			smallObj = Number($('#small-object').text()),
			countryNum = Number($('#country-number').text());

	$('#small-object')
  .prop('number', 0)
  .animateNumber(
    {
      number: smallObj
    },
    10000
  );

  $('#big-object')
  .prop('number', 0)
  .animateNumber(
    {
      number: bigObj
    },
    10000
  );

  $('#country-number')
  .prop('number', 0)
  .animateNumber(	
    {
      number: countryNum
    },
    10000
  );

}

imgVisible();

var mapG = document.getElementById('footer-map');

