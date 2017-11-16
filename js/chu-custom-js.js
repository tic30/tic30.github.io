/*!
 * chu-custom-js.js
 * Copyright (c) 2016-2017 Tianxin Chu
 */

var h = window.innerHeight;
var w = window.innerWidth;
var arrowOffset;
if (w > 480)
    arrowOffset = 20;
else
    arrowOffset = 10;

$(document).ready(function () {
    $(this).scrollTop(0);
    $('[data-toggle="tooltip"]').tooltip();
    $('#sec1').css("height", h - arrowOffset);
    $('.arrow_box').css("top", h - arrowOffset);
    /*
    if (w > 480) {
        $('#sec1').css("height", h - arrowOffset);
        $('.arrow_box').css("top", h - arrowOffset);
    } else {
        $('#sec1').css("height", h - 10);
        $('.arrow_box').css("top", h - 10);
    }*/

    if (w > 768) {
        $('#sec1').css("height", h);
        $('#sec2').css("height", 500);
        // $('#sec3').css("height", 600);
        $(".slid-wrapper").change(sliding());
    }
    if (w > 1024) {
        $('#sec1').css("min-height", "700px");
        $('.sec1nav-brand').css("opacity","0");
        $('.nav-img-wrapper').css("opacity","0");
        $('#sec1-content').css("opacity","0");
        //preloader effect
        $('.preloader-wrapper').css("display", "block");
        setTimeout(function () {
            if (document.readyState === "complete") {
                preloaderOut();
            } else {
                var txt = document.createElement("p");
                txt.id = "preloaderHint";
                txt.innerHTML = "Loading...";
                $('.preloader-wrapper').append(txt);
                document.onreadystatechange = function () {
                    if (document.readyState === "complete") {
                        //preloaderOut();
                    }
                };
                setTimeout(function(){
                    txt.innerHTML = "Page loading takes longer than usual. <br/>Please refresh the page...";
                }, 55000);
            }
        }, 5000);
    }
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
    /*
    setTimeout(function () {
        $('.preloader-button').css("display", "block");
        $('.preloader-button').addClass("animated fadeInDown");
    }, 7000);
    $('.preloader-button').click(function (e) {
        e.preventDefault();
        $('.preloader-wrapper').addClass("animated fadeOut");
        $(this).scrollTop(0);
        setTimeout(function () {
            $('.preloader-wrapper').css("display", "none");
            $('#sec1-content').addClass("animated-slow fadeInUp");
            setTimeout(function () {
                $('.sec1nav-brand').addClass("animated bounceInDown");
            }, 150);
            setTimeout(function () {
                $('#chu-menu').addClass("animated bounceInDown");
            }, 200);
        }, 800);
        setTimeout(function () {
            $('.chu-down').addClass("animated mybounce");
        }, 2000);
        setTimeout(function () {
            $('#sec1').css("height", h - arrowOffset);
        }, 3000);
    });*/

    //sec2 sliding portfolio	
    var imgNo = 0;
    var imgWidth = $('.slid-wrapper img').css("height");
    $('.slid-wrapper img').css("width", imgWidth);

    function sliding() {
        $(".slid-wrapper").animate({
            "left": "-=600px"
        }, 5000, "linear", function () {
            if (imgNo < 6) {
                imgNo++;
            } else {
                imgNo = 1;
            }
            $(this).css("left", "+=600px");
            $(this).append($(".p" + imgNo));
            $(this).change(sliding());
        });
    }

    //left slidebar effects
    $('.nav-img-wrapper').click(function (e) {
        e.preventDefault();
        //branding effects
        function branding() {
            var winh = $(window).scrollTop();
            if ((winh > h - 50 && winh <= $('#sec3').offset().top - 50) || (winh > $('#sec4').offset().top - 50 && winh <= $('#sec5').offset().top - 50) || winh > $('#sec6').offset().top - 50) {
                return true;
            } else {
                return false;
            }
        }
        var branding = branding();
        $("#sidebar-wrapper").toggleClass("toggled");
        if ($('.nav-img').hasClass("img-inverted")) {
            $('.nav-img').removeClass("img-inverted");
        } else if (!$('.nav-img').hasClass("img-inverted") && branding == true) {
            $('.nav-img').addClass("img-inverted");
        }
        if ($("#sidebar-wrapper").hasClass("toggled")) {
            $(".sec1nav").removeClass("animated bounceInLeft slideInLeft");
            $(".sec1nav").addClass("animated bounceOutLeft");
            /*
            $('.td-words').addClass("animated-slow fadeIn");
            setTimeout(function () {
                $('#si1').addClass("animated-slow fadeIn");
            }, 500);
            setTimeout(function () {
                $('#si2').addClass("animated-slow fadeIn");
            }, 650);
            setTimeout(function () {
                $('#si3').addClass("animated-slow fadeIn");
            }, 800);
            setTimeout(function () {
                $('#si4').addClass("animated-slow fadeIn");
            }, 950);
            setTimeout(function () {
                $('#si5').addClass("animated-slow fadeIn");
            }, 1100);
            setTimeout(function () {
                $('#si6').addClass("animated-slow fadeIn");
            }, 1250);
            */
        }
    });

    $('.closeButton, .slider-item a, .page-overlay').click(function (e) {
        //e.preventDefault();
        //branding effects
        function branding() {
            var winh = $(window).scrollTop();
            if ((winh > h - 50 && winh <= $('#sec3').offset().top - 50) || (winh > $('#sec4').offset().top - 50 && winh <= $('#sec5').offset().top - 50) || winh > $('#sec6').offset().top - 50) {
                return true;
            } else {
                return false;
            }
        }
        var branding = branding();
        $("#sidebar-wrapper").toggleClass("toggled");
        if ($('.nav-img').hasClass("img-inverted")) {
            $('.nav-img').removeClass("img-inverted");
        } else if (!$('.nav-img').hasClass("img-inverted") && branding == true) {
            $('.nav-img').addClass("img-inverted");
            $('.sec1nav-brand .steady, .sec1nav-brand .zoom, .dd').css("color", "#000");
            $('.sec1nav-brand hr').css("border-color", "#000");
        }
        if (w < 480) {
            $(".sec1nav").removeClass("animated bounceOutLeft");
            $(".sec1nav").addClass("animated slideInLeft");
        } else {
            $(".sec1nav").removeClass("animated bounceOutLeft");
            $(".sec1nav").addClass("animated bounceInLeft");
        }
        //$('.td-words').stop(true, true).removeClass("animated-slow fadeIn");
        $('.slider-img').stop(true, true).removeClass("animated-slow fadeIn");
    });

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
        $('.contact-details-wrapper').removeClass("fadeInLeft").addClass("fadeInUp");
        $('.contact-form').css("display", "none");
    } else {
        //hover effects
        $(function () {
            var timer;

            //*************** sec1 brand hover effect ***************//
            $('.sec1nav-brand').hover(function () {
                    $('.dd').css("width", "180px");
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    timer = setTimeout(function () {
                        $('.nav-img-wrapper').animate({
                            left: '180px'
                        }, 200);

                        $('.sec1nav-brand .zoom').removeClass('animated fadeOut');
                        $('.sec1nav-brand .zoom').addClass('animated fadeIn');
                        $('.sec1nav-brand .zoom').animate({
                            width: '110px'
                        }, 200);
                        $('.sec1nav-brand hr').stop(true, true).animate({
                            width: '180px',
                            opacity: '1'
                        }, 200);
                        $('.dd').removeClass('animated-fast2 fadeOutUp fadeInDown');
                        $('.dd').stop(true, true).addClass('animated-fast2 fadeInDown');
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
                        setTimeout(function () {
                            $('.dd').addClass('fadeOutUp');
                            $('.dd').animate({
                                width: '70px'
                            }, 200);
                        }, 200);
                        setTimeout(function () {
                            $('.nav-img-wrapper').animate({
                                left: '40px'
                            }, 200);
                        }, 200);
                        setTimeout(function () {
                            $('.dd').css("display", "none");
                        }, 400);
                    }, 200);
                });

            //*************** sec1 logo hover ******************//
            $('#chu-logo').hover(function () {
                $('#hand').removeClass('animated tada'); //hand-wave
                $('#hand, #smile3').stop(true, true).css("opacity", "1");
                $('#hand').addClass('animated tada');
            }, function () {
                setTimeout(function () {
                    $('#hand, #smile3').stop(true, true).css("opacity", "0");
                    $('#hand').removeClass('animated tada');
                }, 800);
            });

            //*************** sec1 p hover ******************//
            $('.sec1-p-span').hover(function () {
                $(this).addClass('hover-up');
            }, function () {
                $(this).removeClass('hover-up');
            });

            //*************** myTable link hover ***************//
            $('.myTable .slider-item').hover(function (e) {
                //e.preventDefault();
                var t = $(this);
                /*
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                timer = setTimeout(function () {*/
                    t.find('.td-words').css("color", "#fff");
                    t.find('img').addClass("img-inverted");
                    if (t.find('.td-color').hasClass('td-o')) {
                        t.addClass('charged-long-o');
                    } else if (t.find('.td-color').hasClass('td-b')) {
                        t.addClass('charged-long-b');
                    } else if (t.find('.td-color').hasClass('td-g')) {
                        t.addClass('charged-long-g');
                    } else if (t.find('.td-color').hasClass('td-r')) {
                        t.addClass('charged-long-r');
                    }

                //}, 50);
            }, function () {
                //mouse out
                var t = $(this);
                t.removeClass('charged-long-o charged-long-g charged-long-b charged-long-r');
                t.find('.td-words').css("color", "#666");
                t.find('img').removeClass("img-inverted");
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
});

function preloaderOut() {
    $('.preloader-wrapper').addClass("animated fadeOut");
    $(document).scrollTop(0);
    setTimeout(function () {
        $('.preloader-wrapper').css("display", "none");
        $('#sec1-content').addClass("animated-slow fadeInUp");
        setTimeout(function () {
            $('.sec1nav-brand').addClass("animated bounceInDown");
        }, 150);
        setTimeout(function () {
            $('.nav-img-wrapper').addClass("animated bounceInDown");
        }, 200);
    }, 800);
    setTimeout(function () {
        $('.chu-down').addClass("animated mybounce");
    }, 2000);
    setTimeout(function () {
        $('#sec1').css("height", h - arrowOffset);
    }, 3000);
}

$(window).resize(function () {
    h = window.innerHeight;
    $('#sec1').css("height", h - arrowOffset);
    $('.arrow_box').css("top", h - arrowOffset);
});

$(window).scroll(function () {
    //branding effects
    function branding() {
        var winh = $(window).scrollTop();
        if ((winh > h - 50 && winh <= $('#sec3').offset().top - 50) || (winh > $('#sec4').offset().top - 50 && winh <= $('#sec5').offset().top - 50) || winh > $('#sec6').offset().top - 50)
            return true;
        else {
            return false;
        }
    }
    var branding = branding();
    if (branding == true && !$("#sidebar-wrapper").hasClass("toggled")) {
        $('.nav-img').addClass("img-inverted");
        $('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color", "#000");
        $('.sec1nav-brand hr').css("border-color", "#000");
    } else {
        $('.nav-img').removeClass("img-inverted");
        $('.sec1nav-brand span, .sec1nav-brand div, .dd').css("color", "#fff");
        $('.sec1nav-brand hr').css("border-color", "#fff");
    }

    //animate sec1 arrow

    if ($(this).scrollTop() > 30) {
        $('#sec1').css("height", h);
        $('.sec2mask').removeClass("original-mask");
        $('.sec2mask').addClass("lighter-gradient");
    } else {
        $('#sec1').css("height", h - arrowOffset);
        $('.sec2mask').removeClass("lighter-gradient");
        $('.sec2mask').addClass("original-mask");
    }
});

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

/* =======  START GOOGLE MAP ======= */
/*
function initMap() {
    var myLatLng = new google.maps.LatLng(47.604099, -122.329844);

    var mapOptions = {
        zoom: 13,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,

        //map styles
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

    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);

    //place marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.604291, -122.320379),
        map: map,
        icon: 'imgs/icons/map-marker.png',
    });
    
    marker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}
*/
// ======= END GOOGLE MAP ======= //

//start wow
var wow = new WOW({
    offset: 50,
});
wow.init();

//Temp PHP Supporting Issue: need a hosting which supports PHP