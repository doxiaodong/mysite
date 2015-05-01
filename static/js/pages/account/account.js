'use strict';

// account_setting
define(['../../func'], function (func) {
    var account_setting = {
        init: function () {
            if (!window.history.replaceState) {
                this.reply();
            }
        },
        reply: function () {
            var replys = func.$id("replys");
            replys.addEventListener('click', function (e) {
                var element;
                for (var i in e.path) {
                    var ele = e.path[i];
                    if (ele.classList.contains('each-reply')) {
                        element = ele;
                        break;
                    }
                }
                var href = element.getAttribute('data-href');
                window.location.href = href;
            });
        }
    };
    return account_setting;
});