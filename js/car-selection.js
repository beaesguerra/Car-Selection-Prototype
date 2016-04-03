$(document).ready(function() {
	$("#main-image-2").fadeOut();
	$("#main-image-3").fadeOut();
	$("#main-image-4").fadeOut();
	$("#main-image-5").fadeOut();
	$("#main-image-1").fadeIn();

	$("#main-image-text-2").fadeOut();
	$("#main-image-text-3").fadeOut();
	$("#main-image-text-4").fadeOut();
	$("#main-image-text-5").fadeOut();	
	var currentCar = 1;

  $('#thumbnail-1').on('click', function () {
  	if(currentCar != 1){
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
	currentCar = 1;
	}
  });
  $('#thumbnail-2').on('click', function () {
  	if(currentCar != 2){
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
		currentCar = 2;
	}
  });
  $('#thumbnail-3').on('click', function () {
  	if(currentCar != 3){
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
		currentCar = 3;
	}
  });
  $('#thumbnail-4').on('click', function () {
  	if(currentCar != 4){
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
		currentCar = 4;
	}
  });
  $('#thumbnail-5').on('click', function () {
  	if(currentCar != 5){
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
		currentCar = 5;
	}
  });

    $('#build-car-button').on('click', function () {
	$("#main-image-2").fadeOut(500);
	$("#main-image-3").fadeOut(500);
	$("#main-image-4").fadeOut(500);
	$("#main-image-5").fadeOut(500);
	$("#main-image-1").fadeOut(500);;

	$("#main-image-text-2").fadeOut(500);
	$("#main-image-text-3").fadeOut(500);
	$("#main-image-text-4").fadeOut(500);
	$("#main-image-text-5").fadeOut(500);
	$("#main-image-text-1").fadeOut(500);
	$(".img-thumbnail").fadeOut(500);
	$("#build-car-button").delay(100).fadeOut(500);
  });
});
