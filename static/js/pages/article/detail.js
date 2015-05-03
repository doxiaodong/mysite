'use strict';

// page_article_detail
define(['../../func', 'shCore'], function (func) {
    var page_article_detail = {
        init: function () {
            console.log("==this is page_article_detail==");
            if (!window.XD.modules.platform.isMobile) {
                SyntaxHighlighter.highlight();
            }

            this.countReply();
            this.replyArticle();
            this.replyComment();



            // angular
            function ReplyCtrl($scope) {
                $scope.show = function() {

                }
            }
        },
        countReply: function() {
            if (angular) {
                return
            }
            var count = func.$q('.count-replys');
            var num = count.getAttribute('ng-init').replace(/ /g, '').replace('count=', '').split('+');
            var res = 0;
            for (var i in num) {
                res += (num[i]-0);
            }
            count.innerHTML = res;
        },
        replyArticle: function() {
            var totalPage = func.$id('total_page');
            var page = totalPage.length ? totalPage.getAttribute('page') - 0 : 1;
            var thePage = func.getSearch('page') - 0;
            var rootReply = func.$qa('.root-reply').length === 10;
            var new_page = ((page === thePage) && rootReply) ? (page + 1) : page;
            var new_href = window.location.href.replace(/page=\d/, 'page=' + new_page);
            var id = func.$id('REPLY_ARTICLE');
            func.$id('ADD_REPLY_BUTTON').addEventListener('click', function(e) {
                var url = id.getAttribute('action');
                var data = func.getFormData('#REPLY_ARTICLE');

                var postData = JSON.stringify(data);
                window.XD.showIndicator();

                window.XD.ajax({
                    method: 'POST',
                    url: url,
                    data: postData,
                    contentType: 'application/json;charset=UTF-8',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRFToken', func.getCookie('csrftoken'));
                    },
                    success: function (response, status, xhr) {
                        var response = JSON.parse(response);

                        if (response.status === true) {
                            window.XD.showIndicator();
                            window.XD.ajax({
                                url: new_href,
                                contentType: 'text/html;charset=utf-8',
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader('XD-PJAX', 'true');
                                },
                                success: function (response, status, xhr) {

                                    func.$q('#PJAX_CONTAINER').innerHTML = response;
                                    page_article_detail.init();
                                    angular.bootstrap(func.$id("MAIN_APP"));

                                },
                                error: function(response, status, xhr) {
                                    window.location.reload();
                                    window.XD.alert('请求出错，请重新尝试。');
                                },
                                complete: function() {
                                    window.XD.hideIndicator();
                                }
                            });
                        } else {
                            if (response.data.not_login) {
                                window.XD.alert(response.data.error, {
                                    title: '出错啦',
                                    ok: '登录'
                                }, function() {
                                    window.XD.modules.Modal.show('#SIGN');
                                });
                            } else {
                                window.XD.alert(response.data.error, {
                                    title: '出错啦',
                                    ok: '确认'
                                });
                            }
                        }
                    },
                    complete: function () {
                        window.XD.hideIndicator();
                    }
                });

                e.preventDefault();
            });
        },
        replyComment: function() {
            var replys = func.$q('.replys');
            replys.addEventListener('click', function(e) {
                var tar = e.target;
                if (tar.getAttribute('reply-object')) {
                    var floor = tar.getAttribute('floor');
                    var floorObj = func.$q('.floor-'+floor);

                    if (floorObj.classList.contains('show')) {
                        //floorObj.classList.remove('show');
                    } else {
                        var showR = func.$qa('.reply-floor.show');
                        var len = showR.length;
                        if (len !== 0) {
                            for (var i = 0; i < len; i++) {
                                showR[i].classList.remove('show');
                            }
                        }
                        floorObj.classList.add('show');
                        var textarea = floorObj.querySelector('.reply-textarea');
                        //textarea.blur();
                        textarea.focus();
                    }
                }
                if (tar.classList.contains('add-subreply-button')) {
                    var floor = tar.getAttribute('floor');
                    var id = func.$id('REPLY_COMMENT_' + floor);
                    var url = id.getAttribute('action');
                    var data = func.getFormData('#REPLY_COMMENT_' + floor);

                    func.extend({
                        reply_object: id.getAttribute('reply-person')
                    } ,data)

                    var postData = JSON.stringify(data);
                    window.XD.showIndicator();

                    window.XD.ajax({
                        method: 'POST',
                        url: url,
                        data: postData,
                        contentType: 'application/json;charset=UTF-8',
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('X-CSRFToken', func.getCookie('csrftoken'));
                        },
                        success: function (response, status, xhr) {
                            console.log('===signin complete===');
                            var response = JSON.parse(response);
                            if (response.status === true) {
                                console.log(response);
                                window.XD.showIndicator();
                                window.XD.ajax({
                                    url: window.location.href,
                                    contentType: 'text/html;charset=utf-8',
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader('XD-PJAX', 'true');
                                    },
                                    success: function (response, status, xhr) {

                                        func.$q('#PJAX_CONTAINER').innerHTML = response;
                                        page_article_detail.init();
                                        angular.bootstrap(func.$id("MAIN_APP"));

                                    },
                                    error: function(response, status, xhr) {
                                        window.location.reload();
                                        window.XD.alert('请求出错，请重新尝试。');
                                    },
                                    complete: function() {
                                        window.XD.hideIndicator();
                                    }
                                });
                            } else {
                                if (response.data.not_login) {
                                    window.XD.alert(response.data.error, {
                                        title: '出错啦',
                                        ok: '登录'
                                    }, function() {
                                        window.XD.modules.Modal.show('#SIGN');
                                    });
                                } else {
                                    window.XD.alert(response.data.error, {
                                        title: '出错啦',
                                        ok: '确认'
                                    });
                                }
                            }
                        },
                        complete: function () {
                            window.XD.hideIndicator();
                        }
                    });

                    e.preventDefault();
                }
            });
        }
    };
    return page_article_detail;
});