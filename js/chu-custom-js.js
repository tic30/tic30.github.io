var h = window.innerHeight;
	rowh = $('#sec4 .row').height();
$('section').css("height",h);
$('#sec1').css("height",h);
$('.arrow_box').css("top",h-30);
//$('#sec2').css("height",h+300);
$('#sec2').css("height",800);
$('#sec3').css("height",600);
$('#sec4').css("height",(rowh+150)*6+250);
$('#sec5').css("height",500);
//$('.transimg').prop("height",h+300);

var mn = $(".navbar");
	mns = "nav-scrolled";
	imgNo=0;
	imgWidth=$('.slid-wrapper img').css("height");

//sec2 sliding portfolio	
$('.slid-wrapper img').css("width",imgWidth);
function sliding(){
	$( ".slid-wrapper" ).animate({ 
		"left": "-=600px" 
	}, 5000, "linear", function() {
		if(imgNo<6)
			imgNo++;
		else
			imgNo=1;
		$( this ).css("left","+=600px");
		$( this ).append( $(".p"+imgNo) );
		$( this ).change(sliding());
	});
}

$(document).ready(function(e){
	$(this).scrollTop(0); 
	//$('.local-scroll').localScroll({duration:500});
	$( ".slid-wrapper" ).change(sliding());
	setTimeout(function(){
		$('.preloader-wrapper').addClass("animated fadeOut");
		$(this).scrollTop(0); 
		setTimeout(function(){
			$('.preloader-wrapper').css("display","none");
			$('#sec1-content').addClass("animated-slow fadeInUp");
			setTimeout(function(){
			$('.sec1nav-brand').addClass("animated bounceInDown");
			}, 150);
			setTimeout(function(){
				$('#chu-menu').addClass("animated bounceInDown");
			}, 200);
		}, 800);
		setTimeout(function(){
			$('.chu-down').addClass("animated mybounce"); 
		}, 2000);
		setTimeout(function(){
			$('#sec1').css("height",h-30);
		}, 3000);
	}, 5000);
	
	$('#chu-menu').click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("toggled");
		if($('.nav-img').hasClass("img-inverted")){
			$('.nav-img').removeClass("img-inverted");
		}else if(!$('.nav-img').hasClass("img-inverted") && $(window).scrollTop() > h){
			$('.nav-img').addClass("img-inverted");
		}
		if($("#sidebar-wrapper").hasClass("toggled")){
			$(".sec1nav").removeClass("animated bounceInLeft");
			$(".sec1nav").addClass("animated bounceOutLeft");
			
			$('.td-words').addClass("animated-slow fadeIn");
			setTimeout(function(){
				$('#si1').addClass("animated-slow fadeIn");
			}, 500);
			setTimeout(function(){
				$('#si2').addClass("animated-slow fadeIn");
			}, 650);
			setTimeout(function(){
				$('#si3').addClass("animated-slow fadeIn");
			}, 800);
			setTimeout(function(){
				$('#si4').addClass("animated-slow fadeIn");
			}, 950);
			setTimeout(function(){
				$('#si5').addClass("animated-slow fadeIn");
			}, 1100);
			setTimeout(function(){
				$('#si6').addClass("animated-slow fadeIn");
			}, 1250);
		}
    });
	
	$('#menu-close').click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("toggled");
		if($('.nav-img').hasClass("img-inverted")){
			$('.nav-img').removeClass("img-inverted");
		}
		else if(!$('.nav-img').hasClass("img-inverted") && $(window).scrollTop() > h){
			$('.nav-img').addClass("img-inverted");
			$('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color","#000");
			$('.sec1nav-brand hr').css("border-color","#000");
		}
		$(".sec1nav").removeClass("animated bounceOutLeft");
		$(".sec1nav").addClass("animated bounceInLeft");
		
		$('.td-words').stop(true, true).removeClass("animated-slow fadeIn");
		$('.slider-img').stop(true, true).removeClass("animated-slow fadeIn");
	});
	
	$('.dropdown-toggle').click(function(e) {
		e.preventDefault();
	  	$(this).localScroll({duration:500});
	});
});

$(window).scroll(function(){
	$('#header2').html($(this).scrollTop()+" -- " +h);
	if( $(this).scrollTop() > h-80 && !$("#sidebar-wrapper").hasClass("toggled")) {
		$('.nav-img').addClass("img-inverted");
		$('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color","#000");
		$('.sec1nav-brand hr').css("border-color","#000");
	}else{
		$('.nav-img').removeClass("img-inverted");
		$('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color","#fff");
		$('.sec1nav-brand hr').css("border-color","#fff");
	}
	
	//animate arrow
	if( $(this).scrollTop() > 30){
		$('#sec1').css("height",h);
		$('.sec2mask').removeClass("original-mask");
		$('.sec2mask').addClass("lighter-gradient");
	}
	else{
		$('#sec1').css("height",h-30);
		$('.sec2mask').removeClass("lighter-gradient");
		$('.sec2mask').addClass("original-mask");
	}
	
	//fix sec2-nav
	if( $(this).scrollTop() > h ) {
		mn.addClass(mns);
		//$('.placeholder').addClass("placeholderIn");
	} else {
		mn.removeClass(mns);
		//$('.placeholder').removeClass("placeholderIn");
	}
	
	//pimg-code slide
	/*
	$( ".pimg-wrapper" ).each(function() {
		if( $(window).scrollTop() >= this.scrollTop()){
			setTimeout(function(){
				this.find('.pimg-code').addClass('pimg-code-piledup');
			}, 1000);
		}
	});
	*/
});

//hover effects
$(function() {
	var timer;
	
	//*************** sec1 brand hover effect ***************//
	$('.sec1nav-brand').hover(function() {
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function() {
			$('.sec1nav-brand div').removeClass('animated fadeOut');
			$('.sec1nav-brand div').stop(true, true).addClass('animated fadeIn');
			$('.sec1nav-brand div').animate({
		  		width: '110px'
			},200);
		  	$('.sec1nav-brand hr').stop(true, true).animate({
		  		width: '175px',
				opacity: '1'
			},200);
			$('.dd').removeClass('animated-fast fadeOutUp fadeInDown');
			$('.dd').stop(true, true).addClass('animated-fast fadeInDown');
			$('.dd').css("display","block");
		}, 200);
    },
    // mouse out
	function() {
		timer = setTimeout(function(){
			$('.sec1nav-brand hr').animate({
				width: '35px',
				opacity: '0'
			},200);
			$('.sec1nav-brand div').addClass('fadeOut');
			$('.sec1nav-brand div').animate({
				width: '0'
			},200);
			$('.dd').addClass('fadeOutUp');
			setTimeout(function(){
				$('.dd').css("display","none");
			},200);
		},200);
    });
	
	//*************** nav-img hover effect ***************//
	$('.nav-img').hover(function() {
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function() {
			$('.nav-img').removeClass('animated bounceInDown');
			$('.nav-img').css("opacity","0.6");
			$('.nav-img').addClass('nav-img-hover');
		}, 50);
    },
    // mouse out
	function() {
		$('.nav-img').css("opacity","1");
		$('.nav-img').removeClass('nav-img-hover');
    });
	
	//*************** btn hover ******************//
	$('.btn1').hover(function() {
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function() {
			$('.btn1').addClass('charged');
			$('.btn1').css("color","#fff");
		}, 50);
    },
    // mouse out
	function() {
		timer = setTimeout(function() {
			$('.btn1').removeClass('charged');
			$('.btn1').css("color","#1a1a1a");
		}, 100);
    });
	
	//*************** myTable link hover ***************//
	$('.myTable .slider-item').hover(function() {
		var t = $(this);
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function() {
			if(t.find('.td-color').hasClass('td-o'))
				t.addClass('charged-long-o');
			else if(t.find('.td-color').hasClass('td-b'))
				t.addClass('charged-long-b');
			else if(t.find('.td-color').hasClass('td-g'))
				t.addClass('charged-long-g');
			//t.find('.td-words').addClass('hover-up');
			t.find('a').css("color","#333");
		}, 50);
    },
    // mouse out
	function() {
		var t = $(this);
		t.removeClass('charged-long-o charged-long-g charged-long-b');
		//t.find('.td-words').removeClass('hover-up');
		t.find('a').css("color","#fff");
    });
});

//sec1 p hover 
$('.sec1-p-span').hover(function() {
	$(this).addClass('hover-up');
}, function() {
	$(this).removeClass('hover-up');
});

//sec5 wechat
$('.dropdown-toggle').hover(function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
});
$('.dropdown-menu').hover(function() {
	$('.dropdown-menu').stop(true, true);
}, function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
});
//sec2-nav dropdown hover
/*
$('.dropdown-toggle').hover(function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
});

$('.dropdown-menu').hover(function() {
	$('.dropdown-menu').stop(true, true);
}, function() {
	$('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
});

$('.navbar-item').hover(function() {
	$(this).find('div').addClass('hover-up');
	//$(this).find('dropdown-menu').addClass('hover-down');
	$(this).find('hr').css("opacity","1");
}, function() {
	$(this).find('div').removeClass('hover-up');
	//$(this).find('dropdown-menu').removeClass('hover-down');
	$(this).find('hr').css("opacity","0.3");
});
*/
$('#chu-logo').hover(function() {
	$('#hand').removeClass('animated tada'); //hand-wave
	$('#hand, #smile3').stop(true, true).css("opacity","1");
	$('#hand').addClass('animated tada');
}, function() {
	setTimeout(function() {
		$('#hand, #smile3').stop(true, true).css("opacity","0");
		$('#hand').removeClass('animated tada');
	}, 800)
});

$('#facebooklink').hover(function() {
	$('#facebookhint').css("opacity","1");
}, function() {
	$('#facebookhint').css("opacity","0");
});

$('#linkedinlink').hover(function() {
	$('#linkedinhint').css("opacity","1");
}, function() {
	$('#linkedinhint').css("opacity","0");
});

$('#wechatlink').hover(function() {
	$('#wechathint').css("opacity","1");
}, function() {
	$('#wechathint').css("opacity","0");
});

$('.chu-down').hover(function() {
	$(this).removeClass("wow animated mybounce");
	$(this).addClass("animated mybounce");
});

//smooth scroll
$(function() {
  $('.local-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
/* ==========  START GOOGLE MAP ========== */
function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(40.444434, -79.953595);

	    var mapOptions = {
	        zoom: 13,
	        center: myLatLng,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#ffffff'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.444434, -79.953595),
        map: map,
		icon: 'imgs/icons/map-marker.png',
    });
}

// ========== END GOOGLE MAP ========== //

//Temp PHP Supporting Issue
/*
$( "form" ).submit(function( event ) {
  alert( "Oops! Message currently unavailable. (PHP not supported by GitHub)" );
  event.preventDefault();
});
*/