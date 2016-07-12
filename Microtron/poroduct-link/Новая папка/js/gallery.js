$("#img_01").elevateZoom({gallery:'gal1', cursor: 'crosshair', galleryActiveClass: 'hideActive', imageCrossfade: true, loadingIcon: 'none'});
$("#img_01").bind("click", function(e) { 
	var ez = $('#img_01').data('elevateZoom');	
	$.fancybox(ez.getGalleryList()); return false; });