'use strict';

define([
    'func',
    'pages/home/home',
    'pages/article/detail'
], function (func,
             home,
             article_detail) {
    var page = {

        init: function () {

            var pathname = window.location.pathname;

            if (pathname === '/') {
                home.init();
            }
            if (pathname.match(/^\/article\/.+\/\d+\/$/)) {
                article_detail.init();
            }

            angular.bootstrap(func.$id("MAIN_APP"));
        }
    };
    return page;
});