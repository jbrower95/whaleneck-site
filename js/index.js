
$(document).ready(function() {

	new WOW().init();


	function moveDiv() {
    var $span = $("#whale_image");

    	var ul_height = $("#nav_bar").height();

		var maxLeft = $(window).width() - $span.width();
        var maxTop = ($(window).height() / 2) - $span.height() - ul_height;
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1)) + ul_height

		$span.animate({left: leftPos, top: topPos});
	};


	$("#whale_image").click(function() {
		
	});


	moveDiv();
	setInterval(moveDiv, 500);

});	