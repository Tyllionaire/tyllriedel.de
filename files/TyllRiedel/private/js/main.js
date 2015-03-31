$(window).load(function() {
	
    FastClick.attach(document.body);
	
	$(window).scroll(function(i){
	    var scrollVar = $(window).scrollTop()/6;
	    var bHeight = $('body').height();
	    var wHeight = $(window).height();
	    var allHeight = bHeight - wHeight;
	    var bWidth = $(window).width();
	    var scrollVar2 = $(window).scrollTop();
	    $('.landingpage').css({'opacity':( 100-scrollVar )/100});
	    $('.green-line').css({'width': (bWidth/allHeight)*scrollVar2 });
	})
	
	var windowSize = $(window).width();
	if (windowSize < 768) {
	  var referrerLength =  window.location.pathname;
	  var referrer =  referrerLength.length;
	  if (referrer > 2) {
		$('html, body').delay(1000).animate({ scrollTop:$('#main').offset().top },'250'); 
	  }		  
	}
	function checkWidth() {
	    var windowSize = $(window).width();
	
	    if (windowSize < 768) {
	      $(window).scroll(function() {   
	  		return $('#aside.scroll').stop();
	      });	  
	    }
	    else {
	      $(window).scroll(function() {    
	       	var space = $(window).scrollTop();   
	  		return $('#aside.scroll').animate({top: space}, {queue: false});    
	      }); 
	    }
	}
	
	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth);
      
	// W I N D O W  S I Z E

	function checkHeight() {
	    var windowHeight = $(window).height();
	    $(".landingpage").css( "height", windowHeight );
	}
	
	// Execute on load
	checkHeight();
	// Bind event listener
	$(window).resize(checkHeight);
	
	
	// B G  I M G
	var image_array = new Array();
//	image_array[0] = "/files/TyllRiedel/private/img/BG-01.jpg";
//	image_array[1] = "/files/TyllRiedel/private/img/BG-02.jpg";
//	image_array[2] = "/files/TyllRiedel/private/img/BG-03.jpg";
//	image_array[3] = "/files/TyllRiedel/private/img/BG-04.jpg";
//	image_array[4] = "/files/TyllRiedel/private/img/BG-05.jpg";
//	image_array[5] = "/files/TyllRiedel/private/img/BG-06.jpg";
//	image_array[6] = "/files/TyllRiedel/private/img/BG-07.jpg";
//	image_array[7] = "/files/TyllRiedel/private/img/BG-08.jpg";
//	image_array[8] = "/files/TyllRiedel/private/img/BG-09.jpg";
//	image_array[9] = "/files/TyllRiedel/private/img/BG-10.jpg";
//	image_array[10] = "/files/TyllRiedel/private/img/BG-11.jpg";
//	image_array[11] = "/files/TyllRiedel/private/img/BG-12.jpg";
//	image_array[12] = "/files/TyllRiedel/private/img/BG-13.jpg";
//	image_array[13] = "/files/TyllRiedel/private/img/BG-14.jpg";
//	image_array[14] = "/files/TyllRiedel/private/img/BG-15.jpg";
	image_array[0] = "/files/TyllRiedel/private/img/IMG_1784.jpg";
//	image_array[0] = "/files/TyllRiedel/private/img/IMG_5623_green.jpg";
	
	var rand_path = image_array[Math.floor(Math.random() * image_array.length)];
	
	$(".landingpage").css('background-image', 'url('+rand_path+')');
	
	// S H U F F L E
    /* initialize shuffle plugin */
    var $grid = $('.grid');
 
	    $grid.shuffle({
	        itemSelector: '.item' // the selector for the items in the grid
	    });
	    
	 $('#filter a').click(function (e) {
	    e.preventDefault();
	 
	    // set active class
	    $('#filter a').removeClass('active');
	    $(this).addClass('active');
	 
	    // get group name from clicked item
	    var groupName = $(this).attr('data-group');
	 
	    // reshuffle grid
	    $grid.shuffle('shuffle', groupName );
	});

    // MORE PROJECTS
    $('.login-wrap.formbody')
    .hide();
    $('.more--projects').click(function (e) {
	    e.preventDefault();
	    $('.login-wrap.formbody')
        .stop(true, true)
        .animate({
            height:"toggle",
            opacity:"toggle"
        },250);
	    $('html, body').animate({ scrollTop:$('#tl_login').offset().top },'1000');
    });
    
	$('.web').attr('data-groups', '["all", "web"]');
	$('.photo').attr('data-groups', '["all", "photo"]');
	$('.video').attr('data-groups', '["all", "video"]');
	
	$('a[href^=#]').on('click', function(e){ var href = $(this).attr('href'); $('html, body').animate({ scrollTop:$(href).offset().top },'slow'); e.preventDefault(); });
		
	$("img").unveil(200, function() {
		  $(this).load(function() {
			  $grid.shuffle('update', '.item' );
		  });
		});

	if ($('body').hasClass('contentpage')) {
		$('.tooltip').tooltipster({
			touchDevices: false,
			animation: 'swing',
			position: 'bottom',
			speed: '200'
		});
	} else {
		return 0;
	}

    // LOGOUT
    function logout(){
    	var referrerLength =  window.location.pathname;
  	  	var referrer =  referrerLength.length;
    	
    	if ($('.mod_login').hasClass('logout')) {
    		$('html, body').delay(500).animate({ scrollTop:$('.formbody').offset().top },'250'); 
    	}
    }
    logout();

});