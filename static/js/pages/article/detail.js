'use strict';

// page_article_detail
define(['pages/pageRouter', '../../func'], function (pages, func) {
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
            var id = func.$id('REPLY_ARTICLE');
            func.$id('ADD_REPLY_BUTTON').addEventListener('click', function(e) {
                var url = id.getAttribute('action');
                var data = func.getFormData('#REPLY_ARTICLE');

                var postData = JSON.stringify(data);

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
                                url: window.location.pathname,
                                contentType: 'text/html;charset=utf-8',
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader('XD-PJAX', 'true');
                                },
                                success: function (response, status, xhr) {

                                    window.XD.hideIndicator();

                                    func.$q('#PJAX_CONTAINER').innerHTML = response;
                                    pages.init();
                                },
                                error: function(response, status, xhr) {
                                    window.location.reload();
                                    window.XD.alert('请求出错，请重新尝试。');
                                }
                            });
                        } else {
                            window.XD.alert(response.data.error, {
                                title: '出错啦',
                                ok: '确认'
                            });
                        }
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
                    }
                }
                //if (tar.classList.contains('add-subreply-button')) {
                //    var url = id.getAttribute('action');
                //    var data = func.getFormData('#REPLY_ARTICLE');
                //
                //    var postData = JSON.stringify(data);
                //
                //    window.XD.ajax({
                //        method: 'POST',
                //        url: url,
                //        data: postData,
                //        contentType: 'application/json;charset=UTF-8',
                //        beforeSend: function (xhr) {
                //            xhr.setRequestHeader('X-CSRFToken', func.getCookie('csrftoken'));
                //        },
                //        success: function (response, status, xhr) {
                //            console.log('===signin complete===');
                //            var response = JSON.parse(response);
                //            if (response.status === true) {
                //                console.log(response);
                //            } else {
                //                window.XD.alert(response.data.error, {
                //                    title: '出错啦',
                //                    ok: '确认'
                //                });
                //            }
                //        }
                //    });
                //
                //    e.preventDefault();
                //}
            });
        }
    };
    return page_article_detail;
});