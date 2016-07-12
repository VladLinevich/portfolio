$(function(){
    // if browser not support transitions at all - we will display some warn message
    if (! flux.browser.supportsTransitions) {
        $('#warn').text('Flux Slider requires a browser that supports CSS3 transitions').show();
    }


    window.mf = new flux.slider('#slider', {
        autoplay: true,
        pagination: true,
        delay: 8000,
        width: 770,
        height: 425
    });

});