$(document).ready(function() {
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-1").fadeIn();

  $('#thumbnail-1').on('click', function () {
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-1").delay(500).fadeIn();
  });
  $('#thumbnail-2').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
  	$("#main-image-2").delay(500).fadeIn();
  });
  $('#thumbnail-3').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-3").delay(500).fadeIn();
  });
  $('#thumbnail-4').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-4").delay(500).fadeIn();
  });
  $('#thumbnail-5').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").delay(500).fadeIn();
  });
});
