window.addEventListener('load', init);
// global
var duoshuoQuery = {short_name:"duxiaodong"};
function init() {
    var html = $('html');
    var body = $('body');
    var isTouchScreen = function() {
        return 'ontouchstart' in document.documentElement;
    };
    var defaultEvent = isTouchScreen() && !window.platform.isDesktop ? {
        click: 'touchend'
    } : {
        click: 'click'
    };
    // header
    var headerNav = $('.header').find('.nav-list');
    var inner = $('li.each-block');
    var timeAfterActive;
    var pageString = '#page';

    refreshIndex(inner);
    $(window).on('hashchange', function() {
        refreshIndex(inner);
    });
    inner.each(function(index) {
        $(this).on(defaultEvent.click, function() {

            if ($(this).hasClass('active')) {
                // collapsePage(inner);
            } else {
                clearTimeout(timeAfterActive);
                window.location.hash = pageString + (index + 1);
            }
        });
    });

    headerNav.find('.each-nav').each(function(index) {
        $(this).on(defaultEvent.click, function() {

            window.location.hash = pageString + (index + 1);
        });
    });

    $('.back-index').on(defaultEvent.click, function() {
        window.location.hash = '';
        window.location.pathname = '/';
    });

    var pages = $('.pages');
    pages.on('click', 'a[data-pjax]', function(e) {
        var page = $(this).data('pjax');
        var opts = {
            url: $(this).attr('href'),
            container: '#page' + page + '-container'
        };
        $(opts.container).off('pjax:start');
        $(opts.container).on('pjax:start', function() {
            $('.pjaxloader').show();
        });
        $(opts.container).off('pjax:end');
        $(opts.container).on('pjax:end', function() {
            $('head link[href*="duoshuo.com"]').remove();
            $('head script[src*="duoshuo.com"]').remove();
            $('head style').remove();
            $('#ds-notify').remove();
            // setTimeout(duoshuo, 1000);
            duoshuo();
            $('.pjaxloader').hide();
        });
        $.pjax(opts);
        e.preventDefault();
    });

    // duoshuo
    function duoshuo() {
        (function() {
            var ds = document.createElement('script');
            // ds.className = 'duoshuo';
            ds.type = 'text/javascript';ds.async = true;
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            (document.getElementsByTagName('head')[0] 
             || document.getElementsByTagName('body')[0]).appendChild(ds);
        })();
    }

    // refresh
    function refreshIndex(inner) {
        var hash = window.location.hash;
        if (/#page/.test(hash)) {
            var index = hash.substring(5) - 1;
            collapsePage(inner, true);
            expandPage(inner, inner.eq(index));
            sliderNav(index);
        }
        if (window.location.pathname === '/' && hash === '') {
            collapsePage(inner);
        }
    }

    // expand
    function expandPage(inner, obj) {
        inner.addClass('has-one-active');
        obj.addClass('active');
        obj.removeClass('has-one-active');

        timeAfterActive = setTimeout(function() {
            obj.addClass('after-active');
            body.addClass('after-active');
            var header = $('header.header');
            if (!header.hasClass('active')) {
                header.addClass('active');
            }
        }, 500);
    }
        // collapse
    function collapsePage(inner, head) {
        if (!$('header.header').hasClass('active')) {
            return;
        }
        if (!head) {
            $('header.header').removeClass('active');
        }
        $('li.each-block.active').removeClass('after-active active');
        body.removeClass('after-active');
        inner.removeClass('has-one-active');
    }

    // slider nav
    function sliderNav(index) {
        var eachNav = headerNav.find('.each-nav');
        eachNav.each(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        eachNav.eq(index).addClass('active');
        body.attr('data-page', (index + 1));
    }

    $.fn.swipe = function(direction, callback) {
        if (this === []) {
            return this;
        }
        this.each(function() {
            var touchObj = this;
            var x1 = null,
                x2 = null,
                y1 = null,
                y2 = null;
            var changeWidth = 100, changeHeight = 50;
            touchObj.addEventListener('touchstart', function(event) {
                if (event.touches.length == 1) {
                    var touch = event.touches[0];
                    x1 = touch.pageX;
                    x2 = touch.pageX;
                    y1 = touch.pageY;
                    y2 = touch.pageY;
                }
            });
            touchObj.addEventListener('touchmove', function(event) {
                if (event.touches.length == 1) {
                    var touch = event.touches[0];
                    x2 = touch.pageX;
                    y2 = touch.pageY;
                }
            });
            touchObj.addEventListener('touchend', function(event) {
                // left and right
                if (x1 !== null && Math.abs(y2 - y1) < changeHeight ) {
                    if (x2 - x1 > changeWidth) {
                        if (direction === undefined) {
                            $(touchObj).trigger('swipeRight');
                        }
                        if (direction === 'right') {
                            callback();
                        }

                    } else if (x1 - x2 > changeWidth) {
                        if (direction === undefined) {
                            $(touchObj).trigger('swipeLeft');
                        }
                        if (direction === 'left') {
                            callback();
                        }
                    }
                }
                // top and bottom
                if (x1 !== null && Math.abs(x2 - x1) < changeWidth ) {
                    if (y2 - y1 > changeHeight) {
                        if (direction === undefined) {
                            $(touchObj).trigger('swipeTop');
                        }
                        if (direction === 'top') {
                            callback();
                        }

                    } else if (y1 - y2 > changeHeight) {
                        if (direction === undefined) {
                            $(touchObj).trigger('swipeBottom');
                        }
                        if (direction === 'bottom') {
                            callback();
                        }
                    }
                }
                x1 = null;
                x2 = null;
                y1 = null;
                y2 = null;
            });
        });
        return this;
    };
    
    /*way 1*/
    $('.pages').swipe().on({
        swipeLeft: function() {
            swipePage('next');
        }, swipeRight: function() {
            swipePage('prev');
        }
    });
    /*way 2*/
    /*$('.pages').swipe('left', function(){
        swipePage('next');
    }).swipe('right', function() {
        swipePage('prev');
    });*/
    $('.pages').each(function() {
        this.addEventListener('gestureend', function(event) {
            if (event.scale < 1) {
                window.location.hash = '';
                window.location.pathname = '/';
            }
        });
    });
    
    function swipePage(direction) {
        var num = headerNav.find('.each-nav').length;
        var curr = body.attr('data-page') - 1;
        var prev = curr - 1 >= 0 ? curr - 1 : num - 1;
        var next = curr + 1 <= num - 1 ? curr + 1 : 0;
        var hash = window.location.hash;
        if (direction === 'prev') {
            headerNav.find('.each-nav').eq(prev).trigger(defaultEvent.click);
            // hash = pageString + (prev + 1);
        } else if (direction === 'next') {
            headerNav.find('.each-nav').eq(next).trigger(defaultEvent.click);
            // hash = pageString + (next + 1);
        }
    }
}
