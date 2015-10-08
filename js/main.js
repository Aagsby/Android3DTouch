$(window).on('touchstart touchmove', function(e) {
	var touches = e.originalEvent.touches;
	var size = (touches[0].radiusX + touches[0].radiusY) / 2 - 1;
	$('.ball.orange').css('transform','translate(-50%, -50%) scale('+ (size / 3) +')');
	$('.ball.yellow').css('transform','translate(-50%, -50%) scale('+ (size / 4) +')');
	$('.ball.green').css('transform','translate(-50%, -50%) scale('+ (size / 5) +')');
});

$(window).on('touchend', function(e) {
	$('.ball').css('transform','');
});