$(document).ready(function() {
  $('#thumbnail-1').on('click', function () {
	$("#main-image-1").removeClass('hidden');
	$("#main-image-2").addClass('hidden');
	$("#main-image-3").addClass('hidden');
	$("#main-image-4").addClass('hidden');
	$("#main-image-5").addClass('hidden');
  });
  $('#thumbnail-2').on('click', function () {
	$("#main-image-2").removeClass('hidden');
	$("#main-image-1").addClass('hidden');
	$("#main-image-3").addClass('hidden');
	$("#main-image-4").addClass('hidden');
	$("#main-image-5").addClass('hidden');
  });
  $('#thumbnail-3').on('click', function () {
	$("#main-image-3").removeClass('hidden');
	$("#main-image-1").addClass('hidden');
	$("#main-image-2").addClass('hidden');
	$("#main-image-4").addClass('hidden');
	$("#main-image-5").addClass('hidden');
  });
  $('#thumbnail-4').on('click', function () {
	$("#main-image-4").removeClass('hidden');
	$("#main-image-1").addClass('hidden');
	$("#main-image-2").addClass('hidden');
	$("#main-image-3").addClass('hidden');
	$("#main-image-5").addClass('hidden');
  });
  $('#thumbnail-5').on('click', function () {
	$("#main-image-5").removeClass('hidden');
	$("#main-image-1").addClass('hidden');
	$("#main-image-2").addClass('hidden');
	$("#main-image-3").addClass('hidden');
	$("#main-image-4").addClass('hidden');
  });
});
