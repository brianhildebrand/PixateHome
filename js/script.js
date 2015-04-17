$(document).ready(function(){
	
	var		winWidth				= $(window).width(),
			winHeight 				= $(window).height(),
			playedInterface			= false,
			playedExamples			= false;

	
	$( ".interface-button" ).click(function() {
		
		var selectedScreen 		= $(this).attr("data-screen") + "-screen",
			selectedPhoneVideo	= $(this).attr("data-screen") + "-video",
			selectedEditorVideo	= $(this).attr("data-screen") + "-video-editor",
			selectedEditor		= $(this).attr("data-screen") + "-screen-macbook";

		
		if( $(this).hasClass('active') ){
			console.log("already the active screen");
		} else {
			console.log("swap the screens");

			$( ".iphone-screen.active" ).fadeOut("slow", function(){
				$( ".iphone-screen" ).removeClass('active');
				//$( "#" + selectedScreen ).addClass('active');
				$( "#" + selectedScreen ).fadeIn( "slow", function(){
					$( "#" + selectedScreen ).addClass('active');
				});
			});

			$( ".macbook-screen.active" ).fadeOut("slow", function(){
				$( ".macbook-screen" ).removeClass('active');
				//$( "#" + selectedScreen ).addClass('active');
				$( "#" + selectedEditor ).fadeIn( "slow", function(){
					$( "#" + selectedEditor ).addClass('active');
					$( "#" + selectedEditorVideo ).get(0).play();
				});
			});
		}


		$( ".interface-button" ).removeClass('active');
		$(this).addClass('active');
	
	});

	/*
	$('#interaction-video-editor').get(0).addEventListener('ended', function(e) {
		console.log("builder video ended");
		$("#interaction-video").get(0).play();
	});
	*/

	/*
	$(window).scroll(function(){

		var examplesVisible 	= $('#examples-section').visible(),
			interfaceVisible	= $('#interaction-section').visible(),
			controlVisible		= $('#control-section').visible();
		
		if( examplesVisible && playedExamples == false ){
			//$('.example-video').get(0).play();

			$('.example-video').each(function () {
				this.play();
			});

			playedExamples = true;
		}	
		
		
		if( interfaceVisible ){
			$('#interaction-editor-video').get(0).play();
			playedInterface = true;
		}
		

		if( controlVisible ){
			$('#controls-editor-video').get(0).play();
			playedInterface = true;
		}
	});
	*/

	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       1,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         false        // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();

	$( '#examples-section .iphone' ).hover(
		function() {
			console.log("play example video");
			$(this).children().get(0).play();

		}, function() {
			$(this).children().get(0).pause();
		}
	);

	
});






