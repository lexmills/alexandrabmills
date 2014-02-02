$(document).ready(function(){
	var curSlide;
	var curID;

	$('a.left').on('click', function(){
		curSlide = $('#slideshow figure').last();

		$(curSlide).insertBefore($('#slideshow figure').first());

		return false;
	});

	$('a.right').on('click', function(){
		curSlide = $('#slideshow figure').first();

		$(curSlide).insertAfter($('#slideshow figure').last());

		return false;
	});

	$('nav ul li a').on('click', function(){
		curID = $(this).attr('data-id');

		//remove styles
		$('nav ul li a').removeClass('selected');
		$('.content').hide();

		//add styles/show
		$(this).addClass('selected');
		$('div[roll=' + curID + ']').show();

		if(curID == 'portfolio') {
			$('#controls img').show('slow');
		} else {
			$('#controls img').hide();
		}
	});
});