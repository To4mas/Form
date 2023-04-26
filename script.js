$(function(){
	
	$('.big-button').on('click',function() {
		$(".little-text").remove();

		var titleElem = $('<div>').text($('#input-name').val()).addClass('title-box');
		var button = $('<div>').addClass('button-delete');
		var turnButton = $('<div>').addClass('button-turn');
	    var notionInput = $('<div>').text($('#input-not').val()).addClass('list-bottom');
	    var head = $(titleElem).append(button).append(turnButton);
	    var result = $('<div>').addClass('list-box').append(head, notionInput);

	    $('#place-for').append(result);
	    $('#input-name').val('');
	    $('#input-not').val('');
	});

	$(document).on('click', '.button-delete', function() {
		$(this).closest('.list-box').remove();
	});

	$(document).on('click', '.button-turn', function() {
		$(this).toggleClass('rotate');
		var bottom = $('.list-bottom');
		if ($(this).closest('.list-box').find('.list-bottom').is(':visible')) {
			$(this).closest('.list-box').find('.list-bottom').slideUp(100);
		}
		else {
			$(this).closest('.list-box').find('.list-bottom').slideDown(200);
		}
	});
});
