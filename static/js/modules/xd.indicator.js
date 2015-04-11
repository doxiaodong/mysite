'use strict';

// xd.indicator
define(['../func'], function (func) {
    var xdIndicator = {
        init: function () {
            var htmlTemplate = '<div class="preloader"></div>';
            var container = document.createElement('div');
            container.classList.add('indicator');
            container.innerHTML = htmlTemplate;
            func.$q('body').appendChild(container);

            var t1, t2;
            window.XD.hideIndicator = function () {
                if (t1) {
                    clearTimeout(t1);
                }
                if (t2) {
                    clearTimeout(t2);
                }
                container.classList.remove('active');
            };
            window.XD.showIndicator = function () {
                // time over 500ms
                t2 = setTimeout(function () {
                    container.classList.add('active');
                }, 500);
                // time over 10s
                t1 = setTimeout(function () {
                    window.XD.hideIndicator();
                    window.XD.alert('加载超时，请重新尝试。');
                }, 10000);
            };

        }
    };
    return xdIndicator;
});