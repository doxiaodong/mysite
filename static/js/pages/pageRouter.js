'use strict';

define([
    'func',
    'pages/home/home',
    'pages/article/detail',
    'pages/account/account',
    'pages/account/setting'
], function (func,
             home,
             article_detail,
             account_account,
             account_setting) {
    var page = {

        init: function () {

            var pathname = window.location.pathname;

            if (pathname === '/') {
                home.init();
            }
            if (pathname.match(/^\/article\/.+\/\d+\/$/)) {
                article_detail.init();
            }
            if (pathname.match(/^\/account\/$/)) {
                account_account.init();
            }
            if (pathname.match(/^\/account\/setting\/$/)) {
                account_setting.init();
            }

            angular.bootstrap(func.$id("MAIN_APP"));
        }
    };
    return page;
});