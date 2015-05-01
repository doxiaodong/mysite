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
            document.addEventListener('click', function (e) {
                var dom = e.target;
                for (var i in e.path) {
                    var element = e.path[i];
                    if (element.classList.contains('xd-pjax')) {
                        dom = element;
                        break;
                    }
                }
                if (dom.classList.contains('xd-pjax')) {
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
                        success: function (response, status, xhr) {

                            if (indicator) {
                                window.XD.hideIndicator();
                            }

                            func.$q(pjaxContainerString).innerHTML = response;
                            //window.localStorage.setItem('XD.page-' + href, response);


                            callback(dom.getAttribute('data-index'));

                            var index = head_nav.getAttribute('index');

                            window.history.pushState({
                                url: href,
                                time: new Date().getTime(),
                                container: pjaxContainerString,
                                index: index
                            }, '', href);

                            page.init();

                        },
                        error: function(response, status, xhr) {
                            if (indicator) {
                                window.XD.hideIndicator();
                                window.XD.alert('请求出错，请重新尝试。');
                            }
                        }
                    });

                    e.preventDefault();
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
                            window.XD.alert('请求出错，请重新尝试。');
                        }
                    }
                });
            });

        }
    };
    return xdPjax;
});