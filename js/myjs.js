//resize nav
$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


//smooth scroll
$(document).ready(function() {
	
	//scroll timer
	$('#mainNav').localScroll({duration:500});
   	$('.btn1').localScroll({duration:500});
	$('#btn2').localScroll({duration:500});
	$('#btn3').localScroll({duration:500});
	$('#btn4').localScroll({duration:500});
	$('#pf6').localScroll({duration:500});
	$('#email-btn').localScroll({duration:300});
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    //slideHeight = slideHeight *0.95;
    $('.carousel .carousel-inner .item').css('height',slideHeight);
	$('.carousel .carousel-inner .item img').css('height',slideHeight);
    $(window).resize(function(){'use strict',
        $('.carousel .carousel-inner .item').css('height',slideHeight);
    });
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});

});

//display fadeIn animation
$(window).scroll(function() {
if($(document).scrollTop() > 200){
	$('#aboutleft').addClass('animated fadeInLeft');
	$('#aboutright').addClass('animated fadeInRight');}
if($(document).scrollTop() > 500)
	$('#services').addClass('animated-slow fadeInRight');
if($(document).scrollTop() > 1200)
	$('#project-header').addClass('animated-slow fadeInDown');
if($(document).scrollTop() > 2100){
	$('#contact1').addClass('animated-slow fadeInDown');
	$('#contact2').addClass('animated-slow fadeInLeft');
	$('#contact3').addClass('animated-slow fadeInRight');}
if($(document).scrollTop() > 2800)
	$('#map-canvas').addClass('animated-slow fadeInUp');
});

//alerts
function comingAlert() {
    alert("Coming soon!");
}
function weChatClick(){
	alert("Open WeChat and find me by searching: CHorizon");
}

/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(40.450500, -79.949552);

	    var mapOptions = {
	        zoom: 15,
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
                color: '#46bcec'
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
        position: new google.maps.LatLng(40.450500, -79.949552),
        map: map,
		icon: 'img/map-marker.png',
    });
}

// ========== END GOOGLE MAP ========== //

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});