$(document).ready(function(){
	
	var		winWidth				= $(window).width(),
			winHeight 				= $(window).height(),
			playedInterface			= false,
			playedExamples			= false,
			animating				= false;

	

	$( ".play-button" ).click(function() {

		var selectedDemo = $(this).attr("data-video");

		$( ".play-button" ).removeClass('active');	

		$( ".example-video.active" ).fadeOut("slow", function(){
			
			$( ".example-video" ).removeClass('active');

			$( "#" + selectedDemo ).fadeIn( "slow", function(){
				$( "#" + selectedDemo ).addClass('active');
				$( "#" + selectedDemo ).get(0).play();

			});

		});

		$( this ).addClass('active');
		
	});


	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       1,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         false,        // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	    	
	    	var animatedId = box.id;
	    	
			if( animatedId == "app-container" ){
				//$('#app-pixate').get(0).play();
				console.log("play vid");

				setTimeout(function() {
					document.getElementById('pixate-app-video').play();
				}, 1000);

				setTimeout(function() {
					document.getElementById('pixate-phone-video').play();
				}, 1500);
			}
	    }

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