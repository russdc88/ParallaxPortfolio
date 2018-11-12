


$(document).ready(function () {

	$(document).ready(function(){

		/*! Fades in page on load */
		$('body').css('display', 'none');
		$('body').css('background-color','#EBE1CE')
		
		$('body').fadeIn(2500);
		
		});
	
	// Click event for any anchor tag that's href starts with #
	$('a[href^="#"]').click(function (event) {

		// The id of the section we want to go to.
		var id = $(this).attr("href");
		var offset = 0
		if (id === "#home") {

			offset = 180;
		}
		else {

			offset = 100;
		}
		// An offset to push the content down from the top.

		// Our scroll target : the top position of the
		// section that has the id referenced by our href.
		var target = $(id).offset().top - offset;

		// The magic...smooth scrollin' goodness.
		$('html, body').animate({ scrollTop: target }, 5000);

		//prevent the page from jumping down to our section.
		event.preventDefault();
	});
});