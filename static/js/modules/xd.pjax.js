'use strict';

// xd.pjax
define(['../pages/pageRouter', '../func'], function (page, func) {
    var xdPjax = {
        init: function (ele, indicator, callback) {
            var head_nav = func.$id('header_nav');
            // first page state
            window.history.replaceState({
                url: window.location.href,
                time: new Date().getTime(),
                container: ele,
                index: head_nav.getAttribute('index')
            }, 'first', window.location.href);

            //var container = func.$q(ele);
            var click = 'click';
            if (window.XD.modules.platform.hasTouch && !window.XD.modules.platform.isDesktop) {
                click = 'touchstart';
            }
            var clickDom, clickSelf;
            var x1,x2,y1,y2;
            var move = false;
            document.addEventListener(click, function (e) {
                var self = this;
                var dom = e.target;

                while (dom !== self) {
                    if (!dom) {
                        break;
                    }
                    if (dom.classList && dom.classList.contains('xd-pjax')) {
                        break;
                    } else {
                        dom = dom.parentNode;
                    }
                }
                clickDom = dom;
                clickSelf = self;
                if (click === 'touchstart' && e.touches.length == 1) {
                    var touch = e.touches[0];
                    x1 = touch.pageX;
                    x2 = touch.pageX;
                    y1 = touch.pageY;
                    y2 = touch.pageY;
                }
                if (click === 'click') {
                    xdPjax.pjax(dom, self, ele, indicator, callback);
                }
                if ((dom && dom.classList && dom.classList.contains('xd-pjax')) && !dom.classList.contains('nota')) {
                    e.preventDefault();
                }
            });
            document.addEventListener('touchmove', function (e) {
                if (e.touches.length == 1) {
                    var touch = e.touches[0];
                    x2 = touch.pageX;
                    y2 = touch.pageY;
                    //if (Math.pow((x1-x2), 2)+Math.pow((y1-y2), 2) > Math.pow(50, 2)) {
                    //    move = true;
                    //}
                    move = true;
                }
            });
            document.addEventListener('touchend', function (e) {
                if (move) {
                    move = false;
                    return;
                } else {
                    xdPjax.pjax(clickDom, clickSelf, ele, indicator, callback);
                }
            });
            window.addEventListener('popstate', function (e) {
                var state = e.state;
                if (state === null) {
                    return;
                }
                if (e.title === 'first') {
                    console.log("first");
                    window.location.reload();
                    return;
                }

                if (indicator) {
                    window.XD.showIndicator();
                }

                window.XD.modules.Ajax({
                    url: state.url,
                    contentType: 'text/html;charset=utf-8',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('XD-PJAX', 'true');
                    },
                    success: function (response, status, xhr) {

                        if (indicator) {
                            window.XD.hideIndicator();
                        }

                        func.$q(state.container).innerHTML = response;
                        callback(state.index);
                        page.init();

                    },
                    error: function(response, status, xhr) {
                        if (indicator) {
                            window.XD.hideIndicator();
                            window.XD.alert('请求出错或页面不存在。');
                        }
                    }
                });
            });

        },
        pjax: function (dom, self, ele, indicator, callback) {
            if (dom && dom.classList && dom.classList.contains('xd-pjax')) {
                var pjaxContainerString = dom.getAttribute('pjax-container') || ele;
                var href = dom.getAttribute('href');

                if (indicator) {
                    window.XD.showIndicator();
                }

                window.XD.modules.Ajax({
                    url: href,
                    contentType: 'text/html;charset=utf-8',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('XD-PJAX', 'true');
                    },
                    complete: function () {
                        if (indicator) {
                            window.XD.hideIndicator();
                        }
                    },
                    success: function (response, status, xhr) {

                        func.$q(pjaxContainerString).innerHTML = response;
                        //window.localStorage.setItem('XD.page-' + href, response);


                        callback(dom.getAttribute('data-index'));

                        var index = func.$id('header_nav').getAttribute('index');

                        window.history.pushState({
                            url: href,
                            time: new Date().getTime(),
                            container: pjaxContainerString,
                            index: index
                        }, '', href);

                        page.init();

                    },
                    error: function(response, status, xhr) {
                        window.XD.alert('请求出错或页面不存在。');
                    }
                });
            }
        }
    };
    return xdPjax;
});