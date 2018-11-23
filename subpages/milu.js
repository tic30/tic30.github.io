/*!
 * chu-custom-js.js
 * Version - 1.2
 * Copyright (c) 2016-2017 Tianxin Chu
 */

var h = window.innerHeight;
var w = window.innerWidth;

$(document).ready(function () {
    // $(this).scrollTop(0);
    // $('#youtube-player').prop("height", w / 16.0 * 9);
    // $('#youtube-player').prop("width", w);

    // if (w > 768) {
    //     $('#sec1').css("height", h);
    //     //$('#sec2').css("height",800);
    //     //$('#sec3').css("height",600);
    //     //$( ".slid-wrapper" ).change(sliding());
    // }

    if (w <= 768) {
        $('#sec4-content .container-fluid .row').each(function () {
            $(this).find('.pimg-wrapper').insertBefore($(this).find('.pp-wrapper'));
        });
        $('.pp-wrapper').removeClass("fadeInDown").addClass("fadeInUp");
    }
    if (w <= 1024) {
        $('#wechatlink').click(function () {
            $('.wechat-dropup').css("display", "block");
            $('.wechat-dropup').addClass("animated fadeInUp");
        });
        $('.wechat-dropup').click(function () {
            $(this).css("display", "none");
        });
    }

    //resize error hint
    // setTimeout(function () {
    //     //$('.preloader-button').css("display","block");
    //     //$('.preloader-button').addClass("animated fadeInDown");
    //     $('#sec1-down').css("display", "block");
    // }, 6000);

    // $('.preloader-button').click(function (e) {
    //     e.preventDefault();
    //     $('.preloader-wrapper').addClass("animated fadeOut");
    //     $(this).scrollTop(0);
    //     setTimeout(function () {
    //         $('.preloader-wrapper').css("display", "none");
    //         $('#sec1-content').addClass("animated-slow fadeInUp");
    //         setTimeout(function () {
    //             $('.sec1nav-brand').addClass("animated bounceInDown");
    //         }, 150);
    //         setTimeout(function () {
    //             $('#chu-menu').addClass("animated bounceInDown");
    //         }, 200);
    //     }, 800);
    //     setTimeout(function () {
    //         $('.chu-down').addClass("animated mybounce");
    //     }, 2000);
    //     setTimeout(function () {
    //         //$('#sec1').css("height",h-30);
    //     }, 3000);
    // });

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
        $('form .form-control').css("display", "none");
    } else {
        //hover effects
        $(function () {
            var timer;

            //*************** sec1 brand hover effect ***************//
            $('.sec1nav-brand').hover(function () {
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    timer = setTimeout(function () {
                        $('.sec1nav-brand .zoom').removeClass('animated fadeOut');
                        $('.sec1nav-brand .zoom').stop(true, true).addClass('animated fadeIn');
                        $('.sec1nav-brand .zoom').animate({
                            width: '40px'
                        }, 200);
                        $('.sec1nav-brand hr').stop(true, true).animate({
                            width: '110px',
                            opacity: '1'
                        }, 200);
                        $('.dd').removeClass('animated-fast fadeOutUp fadeInDown');
                        $('.dd').stop(true, true).addClass('animated-fast fadeInDown');
                        $('.dd').css("display", "block");
                    }, 200);
                },
                // mouse out
                function () {
                    timer = setTimeout(function () {
                        $('.sec1nav-brand hr').animate({
                            width: '35px',
                            opacity: '0'
                        }, 200);
                        $('.sec1nav-brand .zoom').addClass('fadeOut');
                        $('.sec1nav-brand .zoom').animate({
                            width: '0'
                        }, 200);
                        $('.dd').addClass('fadeOutUp');
                        setTimeout(function () {
                            $('.dd').css("display", "none");
                        }, 200);
                    }, 200);
                });

            //*************** sec5 links hover ******************//
            $('.dropdown-toggle').hover(function () {
                $('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
            }, function () {
                $('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
            });
            $('.dropdown-menu').hover(function () {
                $('.dropdown-menu').stop(true, true);
            }, function () {
                $('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
            });

            $('#facebooklink').hover(function () {
                $('#facebookhint').css("opacity", "1");
            }, function () {
                $('#facebookhint').css("opacity", "0");
            });

            $('#linkedinlink').hover(function () {
                $('#linkedinhint').css("opacity", "1");
            }, function () {
                $('#linkedinhint').css("opacity", "0");
            });

            $('#wechatlink').hover(function () {
                $('#wechathint').css("opacity", "1");
            }, function () {
                $('#wechathint').css("opacity", "0");
            });

            //*************** down arrow hover ******************//
            $('.chu-down').hover(function () {
                $(this).addClass("animated mybounce");
            }, function () {
                $(this).removeClass("animated mybounce");
            });
        });
    }
});
//*************** btn hover ******************//
var timer;
$('.btn1').hover(function () {
    var thisbtn = $(this);
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(function () {
        thisbtn.removeClass('animated charged fadeInDown');
        thisbtn.addClass('charged');
        thisbtn.css("color", "#fff");
    }, 50);
}, function () {
    var thisbtn = $(this);
    timer = setTimeout(function () {
        thisbtn.removeClass('charged');
        thisbtn.css("color", "#1a1a1a");
    }, 100);
});

//.return-icon
/*
$('.return-icon').click(function(){
    debugger;
    $('html, body').animate({
      scrollTop: $('#sec1').offset().top
    }, 500);
});*/


/* =======  smooth scroll ======= */
$(function () {
    $('.local-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
        $('.skip-youtube').css("display", "none");
        $('.player-cover-after').css("display", "block");
        $('.player-cover-after').addClass("animated-fast fadeIn-light");
    }
}

function stopVideo() {
    player.stopVideo();
}
//play video
$('.player-cover-before-inner').click(function () {
    $('.skip-youtube').css("display", "block");
    $('.player-cover-before').css("display", "none");
    player.playVideo();
})
//skip video
$('.skip-youtube').click(function () {
    player.stopVideo();
    $('.skip-youtube').css("display", "none");
    $('.player-cover-after').css("display", "block");
    $('.player-cover-after').addClass("animated-fast fadeIn-light");
})
//replay video
$('.replay-youtube').click(function () {
    $('.skip-youtube').css("display", "block");
    $('.player-cover-after').css("display", "none");
    player.seekTo(0);
    player.playVideo();
})
//start wow
new WOW().init();