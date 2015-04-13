'use strict';

define([
    'func',
    'pages/page1',
    'pages/home/home',
    'pages/article/detail'
], function (func,
             page1,
             page_home,
             page_article_detail) {
    var page = {

        init: function () {

            var pathname = window.location.pathname;
            if (pathname.match(/^\/article\/.+\/\d+\/$/)) {
                page_article_detail.init();
            }
            if (pathname === '/') {
                page_home.init();
            }

            angular.bootstrap(func.$id("MAIN_APP"));
        }
    };
    return page;
});