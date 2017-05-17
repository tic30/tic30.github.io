/*!
 * chu-custom-js.js
 * Version - 1.1
 * Copyright (c) 2016 Tianxin Chu
 */
 
var h = window.innerHeight;
var	w = window.innerWidth;
	
$(document).ready(function(){
	$(this).scrollTop(0);
	$('#youtube-player').prop("height",w/16.0*9);
	$('#youtube-player').prop("width",w);
	
	if(w > 768){
		$('#sec1').css("height",h);
		//$('#sec2').css("height",800);
		//$('#sec3').css("height",600);
		//$( ".slid-wrapper" ).change(sliding());
	}
	
	if ( w <= 768 ){
		$('#sec4-content .container-fluid .row').each(function() {
			$( this ).find('.pimg-wrapper').insertBefore($( this ).find('.pp-wrapper'));
		});
		$('.pp-wrapper').removeClass("fadeInDown").addClass("fadeInUp");
	}
	if( w <= 1024){
		$('#wechatlink').click(function() {
			$('.wechat-dropup').css("display","block");
			$('.wechat-dropup').addClass("animated fadeInUp");
		});
		$('.wechat-dropup').click(function() {
			$(this).css("display","none");
		});
	}
	
	//resize error hint
	setTimeout(function(){
		//$('.preloader-button').css("display","block");
		//$('.preloader-button').addClass("animated fadeInDown");
		$('#sec1-down').css("display","block");
	}, 6000);
	
	$('.preloader-button').click(function(e) {
        e.preventDefault();
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
			//$('#sec1').css("height",h-30);
		}, 3000);
	});
	
	//sec2 sliding portfolio	
    /*
	var	imgNo=0;
	var	imgWidth=$('.slid-wrapper img').css("height");
	$('.slid-wrapper img').css("width",imgWidth);
	function sliding(){
		$( ".slid-wrapper" ).animate({ 
			"left": "-=600px" 
		}, 5000, "linear", function() {
			if(imgNo<6){
				imgNo++;}
			else{
				imgNo=1;}
			$( this ).css("left","+=600px");
			$( this ).append( $(".p"+imgNo) );
			$( this ).change(sliding());
		});
	}*/
	
	//disable hover effects on touch devices
	var touch = window.ontouchstart || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
	if (touch || w <= 768) { // remove all :hover stylesheets
		try { // prevent exception on browsers not supporting DOM styleSheets properly
			for (var si in document.styleSheets) {
				var styleSheet = document.styleSheets[si];
				if (!styleSheet.rules) continue;
	
				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;
	
					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
		$('form .form-control').css("display","none");
	}
	else{
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
					$('.sec1nav-brand .zoom').removeClass('animated fadeOut');
					$('.sec1nav-brand .zoom').stop(true, true).addClass('animated fadeIn');
					$('.sec1nav-brand .zoom').animate({
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
					$('.sec1nav-brand .zoom').addClass('fadeOut');
					$('.sec1nav-brand .zoom').animate({
						width: '0'
					},200);
					$('.dd').addClass('fadeOutUp');
					setTimeout(function(){
						$('.dd').css("display","none");
					},200);
				},200);
			});
			
			//*************** sec5 links hover ******************//
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
			
			//*************** down arrow hover ******************//
			$('.chu-down').hover(function() {
				$(this).addClass("animated mybounce");
			},function(){
				$(this).removeClass("animated mybounce");
			});
		});
	}
	
	//*************** btn hover ******************//
			var timer;
			$('.btn1').hover(function() {
				var thisbtn = $(this);
				if(timer) {
					clearTimeout(timer);
					timer = null;
				}
				timer = setTimeout(function() {
					thisbtn.removeClass('animated charged fadeInDown');
					thisbtn.addClass('charged');
					thisbtn.css("color","#fff");
				}, 50);
			}, function() {
				var thisbtn = $(this);
				timer = setTimeout(function() {
					thisbtn.removeClass('charged');
					thisbtn.css("color","#1a1a1a");
				}, 100);
			});
    
    //.return-icon
    $('.return-icon').click(function(){
        $('html, body').animate({
          scrollTop: $('#sec1').offset().top
        }, 500);
    });
    
    //siemens block
    var imageWrapper = $('.cd-images-list'),
		imagesList = imageWrapper.children('li'),
		contentWrapper = $('.cd-content-block'),
		contentList = contentWrapper.children('ul').eq(0).children('li'),
		blockNavigation = $('.block-navigation'),
		blockNavigationNext = blockNavigation.find('.cd-next'),
		blockNavigationPrev = blockNavigation.find('.cd-prev'),
		//used to check if the animation is running
		animating = false;

	//on mobile - open a single project content when selecting a project image
	imageWrapper.on('click', 'a', function(event){
		event.preventDefault();
		var device = MQ();
		
		(device == 'mobile') && updateBlock(imagesList.index($(this).parent('li')), 'mobile');
	});

	//on mobile - close visible project when clicking the .cd-close btn
	contentWrapper.on('click', '.cd-close', function(){
		var closeBtn = $(this);
		if( !animating ) {
			animating = true;
			
			closeBtn.removeClass('is-scaled-up').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				contentWrapper.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					animating = false;
				});

				$('.cd-image-block').removeClass('content-block-is-visible');
				closeBtn.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
		}
	});

	//on desktop - update visible project when clicking the .block-navigation
	blockNavigation.on('click', 'button', function(){
		var direction = $(this),
			indexVisibleblock = imagesList.index(imageWrapper.children('li.is-selected'));

		if( !direction.hasClass('inactive') ) {
			var index = ( direction.hasClass('cd-next') ) ? (indexVisibleblock + 1) : (indexVisibleblock - 1); 
			updateBlock(index);
		}
	});

	//on desktop - update visible project on keydown
	$(document).on('keydown', function(event){
		var device = MQ();
		if( event.which=='39' && !blockNavigationNext.hasClass('inactive') && device == 'desktop') {
			//go to next project
			updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) + 1);
		} else if( event.which=='37' && !blockNavigationPrev.hasClass('inactive') && device == 'desktop' ) {
			//go to previous project
			updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) - 1);
		}
	});

	function updateBlock(n, device) {
		if( !animating) {
			animating = true;
			var imageItem = imagesList.eq(n),
				contentItem = contentList.eq(n);
			
			classUpdate($([imageItem, contentItem]));
			
			if( device == 'mobile') {
				contentItem.scrollTop(0);
				$('.cd-image-block').addClass('content-block-is-visible');
				contentWrapper.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					contentWrapper.find('.cd-close').addClass('is-scaled-up');
					animating = false;
				});
			} else {
				contentList.addClass('overflow-hidden');
				contentItem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					contentItem.siblings().scrollTop(0);
					contentList.removeClass('overflow-hidden');
					animating = false;
				});
			}

			//if browser doesn't support transition
			if( $('.no-csstransitions').length > 0 ) animating = false;

			updateBlockNavigation(n);
		}
	}

	function classUpdate(items) {
		items.each(function(){
			var item = $(this);
			item.addClass('is-selected').removeClass('move-left').siblings().removeClass('is-selected').end().prevAll().addClass('move-left').end().nextAll().removeClass('move-left');
		});
	}

	function updateBlockNavigation(n) {
		( n == 0 ) ? blockNavigationPrev.addClass('inactive') : blockNavigationPrev.removeClass('inactive');
		( n + 1 >= imagesList.length ) ? blockNavigationNext.addClass('inactive') : blockNavigationNext.removeClass('inactive');
	}

	function MQ() {
		return window.getComputedStyle(imageWrapper.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
	}
});

$(window).scroll(function(){
	//branding effects
	/*
	function branding(){
		var winh = $(window).scrollTop();
		if(	( winh > h-50 && winh <= $('#sec3').offset().top-50 ) || (winh > $('#sec4').offset().top-50 && winh <= $('#sec5').offset().top-50 ) || winh > $('#sec6').offset().top-50 )
			return true;
		else{
			return false;
		}
	}
	var branding = branding();
	if( branding == true && !$("#sidebar-wrapper").hasClass("toggled")) {
		$('.nav-img').addClass("img-inverted");
		$('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color","#000");
		$('.sec1nav-brand hr').css("border-color","#000");
	}else{
		$('.nav-img').removeClass("img-inverted");
		$('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color","#fff");
		$('.sec1nav-brand hr').css("border-color","#fff");
	}
	*/
	
	//animate sec1 arrow
	/*
	var arrowOffset;
	if (w > 480) 
		arrowOffset = 30;
	else 
		arrowOffset = 10;
	if( $(this).scrollTop() > 30){
		$('#sec1').css("height",h);
		$('.sec2mask').removeClass("original-mask");
		$('.sec2mask').addClass("lighter-gradient");
	}
	else{
		$('#sec1').css("height",h-arrowOffset);
		$('.sec2mask').removeClass("lighter-gradient");
		$('.sec2mask').addClass("original-mask");
	}
	*/
});

/* =======  smooth scroll ======= */
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

/* =======  youtube video ======= */
var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
	function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-player', {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
		//player.addEventListener("onReady", onPlayerReady);
  		//player.addEventListener("onStateChange", onPlayerStateChange);
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
			//alert("finished!");
            $('.skip-youtube').css("display","none");
			$('.player-cover-after').css("display","block");
			$('.player-cover-after').addClass("animated-fast fadeIn-light");
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
//play video
$('.player-cover-before-inner').click(function(){    
    $('.skip-youtube').css("display","block");
	$('.player-cover-before').css("display","none");
	player.playVideo();
})
//skip video
$('.skip-youtube').click(function(){
	player.stopVideo();
    $('.skip-youtube').css("display","none");
	$('.player-cover-after').css("display","block");
	$('.player-cover-after').addClass("animated-fast fadeIn-light");
})
//replay video
$('.replay-youtube').click(function(){
    $('.skip-youtube').css("display","block");
    $('.player-cover-after').css("display","none");
    player.seekTo(0);
	player.playVideo();
})
//start wow
new WOW().init();