$(document).ready(function() {
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-1").fadeIn();
	// var mainImageText = document.getElementById("main-image-text");
 //    mainImageText.textContent = "Audi 951";

	$("#main-image-text-2").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-5").fadeOut();	

  $('#thumbnail-1').on('click', function () {
	$("#build-car-button").fadeOut(0);
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-1").delay(500).fadeIn();

	$("#main-image-text-2").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-5").fadeOut();
	$("#main-image-text-1").delay(1000).fadeIn();
	$("#build-car-button").delay(1500).fadeIn(50);
  });
  $('#thumbnail-2').on('click', function () {
  	$("#build-car-button").fadeOut(0);
	$("#main-image-1").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
  	$("#main-image-2").delay(500).fadeIn();

  	$("#main-image-text-1").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-5").fadeOut();
	$("#main-image-text-2").delay(1000).fadeIn();
	$("#build-car-button").delay(1500).fadeIn(50);
  });
  $('#thumbnail-3').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#build-car-button").fadeOut(0);
	$("#main-image-3").delay(500).fadeIn();

	$("#main-image-text-1").fadeOut();
	$("#main-image-text-2").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-5").fadeOut();
	$("#main-image-text-3").delay(1000).fadeIn();
	$("#build-car-button").delay(1500).fadeIn(50);
  });
  $('#thumbnail-4').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-5").fadeOut();
	$("#build-car-button").fadeOut(0);
	$("#main-image-4").delay(500).fadeIn();

	$("#main-image-text-2").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-1").fadeOut();
	$("#main-image-text-5").fadeOut();
	$("#main-image-text-4").delay(1000).fadeIn();
	$("#build-car-button").delay(1500).fadeIn(50);
  });
  $('#thumbnail-5').on('click', function () {
	$("#main-image-1").fadeOut();
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#build-car-button").fadeOut(0);
	$("#main-image-5").delay(500).fadeIn();

	$("#main-image-text-2").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-1").fadeOut();
	$("#main-image-text-5").delay(1000).fadeIn();
	$("#build-car-button").delay(1500).fadeIn(50);
  });
});
