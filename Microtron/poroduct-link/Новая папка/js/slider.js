jQuery(function($) {
    $( "#carousel" ).rcarousel({
        enabled: true,
        direction: "next",
        interval: 5000,
        orientation: "vertical",
        width: 130,
        height: 180,
        visible: 12
    });
});