'use strict';

// xd.ajax
define(['../func'], function (func) {
    var xdAjax = {
        init: function () {

            window.XD.modules.Ajax = function (options) {
                var defaults = {
                    method: 'GET',
                    data: '',
                    url: '',
                    async: true,
                    contentType: 'application/x-www-form-urlencoded',
                    beforeSend: function () {
                    },
                    complete: function () {
                    },
                    success: function () {

                    },
                    error: function () {
                        window.XD.alert('请求出错，请重新尝试。');
                    }
                };
                // Merge options and defaults
                func.extend(defaults, options);

                var _method = options.method.toUpperCase();

                // Create XHR
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        options.complete(xhr.response, xhr.status, xhr);
                    }
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        options.success(xhr.response, xhr.status, xhr);
                    }
                    if (xhr.readyState == 4) {
                        if (xhr.status >= 400) {
                            options.error(xhr.response, xhr.status, xhr);
                        }
                    }
                };

                xhr.open(_method, options.url, options.async);
                if (options.beforeSend) {
                    options.beforeSend(xhr);
                }
                xhr.setRequestHeader('Content-Type', options.contentType);
                xhr.send(options.data);
            };

            window.XD.ajax = window.XD.modules.Ajax;

        }
    };
    return xdAjax;
});