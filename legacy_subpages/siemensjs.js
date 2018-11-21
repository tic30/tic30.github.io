/*!
 * chu-custom-js.js
 * Version - 1.2
 * Copyright (c) 2016-2017 Tianxin Chu
 */

var w = window.innerWidth;

$(document).ready(function () {
    $(this).scrollTop(0);

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
                            width: '110px'
                        }, 200);
                        $('.sec1nav-brand hr').stop(true, true).animate({
                            width: '175px',
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
        });
    }
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
imageWrapper.on('click', 'a', function (event) {
    event.preventDefault();
    var device = MQ();

    (device == 'mobile') && updateBlock(imagesList.index($(this).parent('li')), 'mobile');
});

//on mobile - close visible project when clicking the .cd-close btn
contentWrapper.on('click', '.cd-close', function () {
    var closeBtn = $(this);
    if (!animating) {
        animating = true;

        closeBtn.removeClass('is-scaled-up').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            contentWrapper.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                animating = false;
            });

            $('.cd-image-block').removeClass('content-block-is-visible');
            closeBtn.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
    }
});

//on desktop - update visible project when clicking the .block-navigation
blockNavigation.on('click', 'button', function () {
    var direction = $(this),
        indexVisibleblock = imagesList.index(imageWrapper.children('li.is-selected'));

    if (!direction.hasClass('inactive')) {
        var index = (direction.hasClass('cd-next')) ? (indexVisibleblock + 1) : (indexVisibleblock - 1);
        updateBlock(index);
    }
});

//on desktop - update visible project on keydown
$(document).on('keydown', function (event) {
    var device = MQ();
    if (event.which == '39' && !blockNavigationNext.hasClass('inactive') && device == 'desktop') {
        //go to next project
        updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) + 1);
    } else if (event.which == '37' && !blockNavigationPrev.hasClass('inactive') && device == 'desktop') {
        //go to previous project
        updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) - 1);
    }
});

function updateBlock(n, device) {
    if (!animating) {
        animating = true;
        var imageItem = imagesList.eq(n),
            contentItem = contentList.eq(n);

        classUpdate($([imageItem, contentItem]));

        if (device == 'mobile') {
            contentItem.scrollTop(0);
            $('.cd-image-block').addClass('content-block-is-visible');
            contentWrapper.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                contentWrapper.find('.cd-close').addClass('is-scaled-up');
                animating = false;
            });
        } else {
            contentList.addClass('overflow-hidden');
            contentItem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                contentItem.siblings().scrollTop(0);
                contentList.removeClass('overflow-hidden');
                animating = false;
            });
        }

        //if browser doesn't support transition
        if ($('.no-csstransitions').length > 0) animating = false;

        updateBlockNavigation(n);
    }
}

function classUpdate(items) {
    items.each(function () {
        var item = $(this);
        item.addClass('is-selected').removeClass('move-left').siblings().removeClass('is-selected').end().prevAll().addClass('move-left').end().nextAll().removeClass('move-left');
    });
}

function updateBlockNavigation(n) {
    (n == 0) ? blockNavigationPrev.addClass('inactive'): blockNavigationPrev.removeClass('inactive');
    (n + 1 >= imagesList.length) ? blockNavigationNext.addClass('inactive'): blockNavigationNext.removeClass('inactive');
}

function MQ() {
    return window.getComputedStyle(imageWrapper.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
}