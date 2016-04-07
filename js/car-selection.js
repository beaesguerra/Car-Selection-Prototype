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
	$(".model-view-thumbnails").fadeOut(0);
	$("#main-customization-img").fadeOut(0);
	$("#next-button").fadeOut(0);
	$("#back-button").fadeOut(0);

	$(".Select-Car").fadeOut(0);

  $('.logo-thumbnail').on('click', function () {
		$("#car-manufacturer").fadeOut(500);
		$(".Select-Car").delay(500).fadeIn(500);
	
  });

	var currentCar = 1;
	var currentCustomizationView = 0;
	var currentInteriorColor = 0;
	var currentExteriorColor = 0;
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
		$("#build-car-button").delay(1050).fadeIn(50);
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
		$("#build-car-button").delay(1050).fadeIn(50);
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
		$("#build-car-button").delay(1050).fadeIn(50);
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
		$("#build-car-button").delay(1050).fadeIn(50);
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
		$("#build-car-button").delay(1050).fadeIn(50);
		currentCar = 5;
	}
  });

  $('#build-car-button').on('click', function () {
	$("#main-image-2").fadeOut(500);
	$("#main-image-3").fadeOut(500);
	$("#main-image-4").fadeOut(500);
	$("#main-image-5").fadeOut(500);
	$("#main-image-1").fadeOut(500);

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

	$(".brown-interior-thumbnails").fadeOut(0);
	$(".red-interior-thumbnails").fadeOut(0);
	$(".white-interior-thumbnails").fadeOut(0);
	$(".grey-audi-exterior-thumbnails").fadeOut(0);
	$(".red-audi-exterior-thumbnails").fadeOut(0);
	$(".dark-blue-audi-exterior-thumbnails").fadeOut(0);
	$(".blue-audi-exterior-thumbnails").fadeOut(0);
	$(".white-audi-exterior-thumbnails").fadeIn(0);
	$(".black-interior-thumbnails").fadeIn(0);
	$(".model-view-thumbnails").delay(2500).fadeIn(1000);

	$("#main-customization-img").fadeIn(500);
	$(".customize-main-image").fadeOut(0);
	$("#white-audi-front").delay(1500).fadeIn(1000);

	$("#next-button").delay(2000).fadeIn(200);
	$("#back-button").delay(2000).fadeIn(200);

	currentCustomizationView = 1;
	currentInteriorColor = 1;
	currentExteriorColor = 1;

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

  $('.exterior-thumbnail-1').on('click', function () {
  	if (currentCustomizationView != 1)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentExteriorColor == 1)
		{
			$("#white-audi-front").fadeIn(1250);
		}
		else if (currentExteriorColor == 2)
		{
			$("#grey-audi-front").fadeIn(1250);
		}
		else if (currentExteriorColor == 3)
		{
			$("#red-audi-front").fadeIn(1250);
		}
		else if (currentExteriorColor == 4)
		{
			$("#dark-blue-audi-front").fadeIn(1250);
		}
		else
		{
			$("#blue-audi-front").fadeIn(1250);
		}
		currentCustomizationView = 1;
	}
  });
  $('.exterior-thumbnail-2').on('click', function () {
  	if (currentCustomizationView != 2)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentExteriorColor == 1)
		{
			$("#white-audi-side").fadeIn(1250);
		}
		else if (currentExteriorColor == 2)
		{
			$("#grey-audi-side").fadeIn(1250);
		}
		else if (currentExteriorColor == 3)
		{
			$("#red-audi-side").fadeIn(1250);
		}
		else if (currentExteriorColor == 4)
		{
			$("#dark-blue-audi-side").fadeIn(1250);
		}
		else
		{
			$("#blue-audi-side").fadeIn(1250);
		}
		currentCustomizationView = 2;
	}
  });
  $('.exterior-thumbnail-3').on('click', function () {
  	if (currentCustomizationView != 3)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentExteriorColor == 1)
		{
			$("#white-audi-headlights").fadeIn(1250);
		}
		else if (currentExteriorColor == 2)
		{
			$("#grey-audi-headlights").fadeIn(1250);
		}
		else if (currentExteriorColor == 3)
		{
			$("#red-audi-headlights").fadeIn(1250);
		}
		else if (currentExteriorColor == 4)
		{
			$("#dark-blue-audi-headlights").fadeIn(1250);
		}
		else
		{
			$("#blue-audi-headlights").fadeIn(1250);
		}
		currentCustomizationView = 3;
	}
  });
    $('.exterior-thumbnail-4').on('click', function () {
  	if (currentCustomizationView != 4)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentExteriorColor == 1)
		{
			$("#white-audi-front-side-view").fadeIn(1250);
		}
		else if (currentExteriorColor == 2)
		{
			$("#grey-audi-front-side-view").fadeIn(1250);
		}
		else if (currentExteriorColor == 3)
		{
			$("#red-audi-front-side-view").fadeIn(1250);
		}
		else if (currentExteriorColor == 4)
		{
			$("#dark-blue-audi-front-side-view").fadeIn(1250);
		}
		else
		{
			$("#blue-audi-front-side-view").fadeIn(1250);
		}
		currentCustomizationView = 4;
	}
  });
    $('.exterior-thumbnail-5').on('click', function () {
  	if (currentCustomizationView != 5)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentExteriorColor == 1)
		{
			$("#white-audi-backside").fadeIn(1250);
		}
		else if (currentExteriorColor == 2)
		{
			$("#grey-audi-backside").fadeIn(1250);
		}
		else if (currentExteriorColor == 3)
		{
			$("#red-audi-backside").fadeIn(1250);
		}
		else if (currentExteriorColor == 4)
		{
			$("#dark-blue-audi-backside").fadeIn(1250);
		}
		else
		{
			$("#blue-audi-backside").fadeIn(1250);
		}
		currentCustomizationView = 5;
	}
  });
  $('.interior-thumbnail-1').on('click', function () {
  	if (currentCustomizationView != 6)
  	{
		$(".customize-main-image").fadeOut(0); 
		if (currentInteriorColor == 1)
			$("#black-interior-1").delay(100).fadeIn(1250);
		else if (currentInteriorColor == 2)
			$("#brown-interior-1").delay(100).fadeIn(1250);
		else if (currentInteriorColor == 3)
			$("#red-interior-1").delay(100).fadeIn(1250);
		else 
			$("#white-interior-1").delay(100).fadeIn(1250);
		currentCustomizationView = 6;

	}
  });
  $('.interior-thumbnail-2').on('click', function () {
  	if (currentCustomizationView != 7)
  	{
		$(".customize-main-image").fadeOut(0);
		if (currentInteriorColor == 1)
			$("#black-interior-2").delay(100).fadeIn(1250);
		else if (currentInteriorColor == 2)
			$("#brown-interior-2").delay(100).fadeIn(1250);
		else if (currentInteriorColor == 3)
			$("#red-interior-2").delay(100).fadeIn(1250);
		else 
			$("#white-interior-2").delay(100).fadeIn(1250);
		currentCustomizationView = 7;
	}
  });

  $('#interior-color-1').on('click', function () {
  	if (currentInteriorColor != 1)
  	{
		$(".brown-interior-thumbnails").fadeOut(0);
		$(".red-interior-thumbnails").fadeOut(0);
		$(".white-interior-thumbnails").fadeOut(0);
		$(".black-interior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 6)
		{
			$(".customize-main-image").fadeOut(0);
			$("#black-interior-1").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 7)
		{
			$(".customize-main-image").fadeOut(0);
			$("#black-interior-2").delay(100).fadeIn(1250);
		}
		currentInteriorColor = 1;
	}
  });
  $('#interior-color-2').on('click', function () {
  	if (currentInteriorColor != 2)
  	{
		$(".black-interior-thumbnails").fadeOut(0);
		$(".red-interior-thumbnails").fadeOut(0);
		$(".white-interior-thumbnails").fadeOut(0);
		$(".brown-interior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 6)
		{
			$(".customize-main-image").fadeOut(0);
			$("#brown-interior-1").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 7)
		{
			$(".customize-main-image").fadeOut(0);
			$("#brown-interior-2").delay(100).fadeIn(1250);
		}
		currentInteriorColor = 2;
	}
  });
  $('#interior-color-3').on('click', function () {
  	if (currentInteriorColor != 3)
  	{
		$(".black-interior-thumbnails").fadeOut(0);
		$(".brown-interior-thumbnails").fadeOut(0);
		$(".white-interior-thumbnails").fadeOut(0);
		$(".red-interior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 6)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-interior-1").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 7)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-interior-2").delay(100).fadeIn(1250);
		}
		currentInteriorColor = 3;
	}
  });
    $('#interior-color-4').on('click', function () {
  	if (currentInteriorColor != 4)
  	{
		$(".black-interior-thumbnails").fadeOut(0);
		$(".red-interior-thumbnails").fadeOut(0);
		$(".brown-interior-thumbnails").fadeOut(0);
		$(".white-interior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 6)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-interior-1").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 7)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-interior-2").delay(100).fadeIn(1250);
		}
		currentInteriorColor = 4;
	}
  });

  $('#exterior-color-1').on('click', function () {
  	if (currentExteriorColor != 1)
  	{
		$(".grey-audi-exterior-thumbnails").fadeOut(0);
		$(".red-audi-exterior-thumbnails").fadeOut(0);
		$(".dark-blue-audi-exterior-thumbnails").fadeOut(0);
		$(".blue-audi-exterior-thumbnails").fadeOut(0);
		$(".white-audi-exterior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 1)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 2)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 3)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-audi-headlights").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 4)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-audi-front-side-view").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 5)
		{
			$(".customize-main-image").fadeOut(0);
			$("#white-audi-backside").delay(100).fadeIn(1250);
		}
		currentExteriorColor = 1;
	}
  });
  $('#exterior-color-2').on('click', function () {
  	if (currentExteriorColor != 2)
  	{
		$(".white-audi-exterior-thumbnails").fadeOut(0);
		$(".red-audi-exterior-thumbnails").fadeOut(0);
		$(".dark-blue-audi-exterior-thumbnails").fadeOut(0);
		$(".blue-audi-exterior-thumbnails").fadeOut(0);
		$(".grey-audi-exterior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 1)
		{
			$(".customize-main-image").fadeOut(0);
			$("#grey-audi-front").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 2)
		{
			$(".customize-main-image").fadeOut(0);
			$("#grey-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 3)
		{
			$(".customize-main-image").fadeOut(0);
			$("#grey-audi-headlights").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 4)
		{
			$(".customize-main-image").fadeOut(0);
			$("#grey-audi-front-side-view").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 5)
		{
			$(".customize-main-image").fadeOut(0);
			$("#grey-audi-backside").delay(100).fadeIn(1250);
		}
		currentExteriorColor = 2;
	}
  });
  $('#exterior-color-3').on('click', function () {
  	if (currentExteriorColor != 3)
  	{
		$(".grey-audi-exterior-thumbnails").fadeOut(0);
		$(".white-audi-exterior-thumbnails").fadeOut(0);
		$(".dark-blue-audi-exterior-thumbnails").fadeOut(0);
		$(".blue-audi-exterior-thumbnails").fadeOut(0);
		$(".red-audi-exterior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 1)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-audi-front").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 2)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 3)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-audi-headlights").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 4)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-audi-front-side-view").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 5)
		{
			$(".customize-main-image").fadeOut(0);
			$("#red-audi-backside").delay(100).fadeIn(1250);
		}
		currentExteriorColor = 3;
	}
  });
    $('#exterior-color-4').on('click', function () {
  	if (currentExteriorColor != 4)
  	{
		$(".grey-audi-exterior-thumbnails").fadeOut(0);
		$(".red-audi-exterior-thumbnails").fadeOut(0);
		$(".white-audi-exterior-thumbnails").fadeOut(0);
		$(".blue-audi-exterior-thumbnails").fadeOut(0);
		$(".dark-blue-audi-exterior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 1)
		{
			$(".customize-main-image").fadeOut(0);
			$("#dark-blue-audi-front").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 2)
		{
			$(".customize-main-image").fadeOut(0);
			$("#dark-blue-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 3)
		{
			$(".customize-main-image").fadeOut(0);
			$("#dark-blue-audi-headlights").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 4)
		{
			$(".customize-main-image").fadeOut(0);
			$("#dark-blue-audi-front-side-view").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 5)
		{
			$(".customize-main-image").fadeOut(0);
			$("#dark-blue-audi-backside").delay(100).fadeIn(1250);
		}
		currentExteriorColor = 4;
	}
  });

    $('#exterior-color-5').on('click', function () {
  	if (currentExteriorColor != 5)
  	{
		$(".grey-audi-exterior-thumbnails").fadeOut(0);
		$(".red-audi-exterior-thumbnails").fadeOut(0);
		$(".dark-blue-audi-exterior-thumbnails").fadeOut(0);
		$(".white-audi-exterior-thumbnails").fadeOut(0);
		$(".blue-audi-exterior-thumbnails").delay(100).fadeIn(1500);
		if (currentCustomizationView == 1)
		{
			$(".customize-main-image").fadeOut(0);
			$("#blue-audi-front").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 2)
		{
			$(".customize-main-image").fadeOut(0);
			$("#blue-audi-side").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 3)
		{
			$(".customize-main-image").fadeOut(0);
			$("#blue-audi-headlights").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 4)
		{
			$(".customize-main-image").fadeOut(0);
			$("#blue-audi-front-side-view").delay(100).fadeIn(1250);
		}
		else if (currentCustomizationView == 5)
		{
			$(".customize-main-image").fadeOut(0);
			$("#blue-audi-backside").delay(100).fadeIn(1250);
		}
		currentExteriorColor = 5;
	}
  });
    $('#back-button').on('click', function () {

		$("#main-image-1").delay(500).fadeIn(500);
		$("#main-image-text-1").delay(500).fadeIn(500);	
		$("#selector-topbar").fadeOut(0);	
		$("#interior-color-picker").delay(200).fadeOut(300);
		$("#exterior-color-picker").delay(200).fadeOut(300);
		$(".model-view-thumbnails").delay(200).fadeOut(300);
		$("#main-customization-img").delay(200).fadeOut(300);
		$("#next-button").delay(200).fadeOut(300);
		$("#back-button").delay(200).fadeOut(300);
		$("#build-car-button").delay(500).fadeIn(500);
		$(".model-thumbnails").delay(500).fadeIn(500);
		currentCar = 1;
		currentCustomizationView = 0;
		currentInteriorColor = 0;
		currentExteriorColor = 0;
  });

});
