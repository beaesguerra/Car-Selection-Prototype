$(document).ready(function() {
	$("#main-image-2").fadeOut(0);
	$("#main-image-3").fadeOut(0);
	$("#main-image-4").fadeOut(0);
	$("#main-image-5").fadeOut(0);
	$("#main-image-1").fadeIn();

	$("#main-image-text-2").fadeOut(0);
	$("#main-image-text-3").fadeOut(0);
	$("#main-image-text-4").fadeOut(0);
	$("#main-image-text-5").fadeOut(0);	
	$("#selector-topbar").fadeOut(0);	
	$("#interior-color-picker").fadeOut(0);
	$("#exterior-color-picker").fadeOut(0);
	$("#model-view-thumbnails").fadeOut(0);
	$("#main-customization-img").fadeOut(0);
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
	$(".model-thumbnails").fadeOut(500);
	$("#build-car-button").delay(100).fadeOut(500);


	$("#selector-topbar").delay(600).fadeIn(500);	
	$("#interior-color-picker").delay(600).fadeIn(300);
	$("#exterior-color-picker").delay(600).fadeIn(300);
	$("#model-view-thumbnails").delay(1250).fadeIn(500);
	$("#main-customization-img").delay(1500).fadeIn(1000);
	if (currentCar == 1)
	{
		document.getElementById("text-model").innerHTML = "Audi 951";
	}
	else if (currentCar == 2)
	{
		document.getElementById("text-model").innerHTML = "Audi 811";
	}
	else if (currentCar == 3)
	{
		document.getElementById("text-model").innerHTML = "Audi 154";
	}
	else if (currentCar == 4)
	{
		document.getElementById("text-model").innerHTML = "Audi 971";
	}
	else 
	{
		document.getElementById("text-model").innerHTML = "Audi 361";
	}
  });
});
