
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

	moveDiv();
	setInterval(moveDiv, 5000);
});	

function scrollTo(page) {
	var pages = [$("#page_one"), $("#page_two"), $("#page_three")];
	$('html, body').animate({
        scrollTop: pages[page].offset().top
    }, 2000);
}